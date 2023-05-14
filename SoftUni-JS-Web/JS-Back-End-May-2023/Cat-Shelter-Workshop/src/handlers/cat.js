const fs = require('fs/promises');
const path = require('path');
const formidable = require('formidable');
const querystring = require('querystring');
const {
  getBreeds,
  getCats,
  generateRandomId,
  dataFilePath,
  viewsFilePath,
} = require('../api');

async function getCat(catID) {
  const cats = await getCats();
  const matchingCat = cats.find((c) => c._id === catID);
  if (!matchingCat) {
    throw new Error('Cat not found.');
  }
  return matchingCat;
}

async function getBreedsAsOption(cat) {
  const breeds = await getBreeds();
  const breedsAsOptions = breeds.map(
    (b) =>
      `<option value="${b}" ${
        cat && cat.breed === b ? 'selected' : ''
      }>${b}</option>`
  );
  return breedsAsOptions;
}

const GETMethods = {
  'add-cat': async (modifiedPath) => {
    const breeds = await getBreedsAsOption();
    const file = await fs.readFile(
      viewsFilePath('addCat.html'),
      'utf-8'
    );
    return file.toString().replace('{{catBreeds}}', breeds);
  },
  'edit-cat': async (modifiedPath) => {
    const catID = modifiedPath[1];
    const matchingCat = await getCat(catID);
    const data = await fs.readFile(
      viewsFilePath('editCat.html'),
      'utf-8'
    );
    const breeds = await getBreedsAsOption(matchingCat);
    const modifiedData = data
      .toString()
      .replace('{{name}}', matchingCat.name)
      .replace('{{description}}', matchingCat.description)
      .replace('{{breeds}}', breeds)
      .replace('{{breed}}', matchingCat.breed);

    return modifiedData;
  },
  'add-breed': async (modifiedPath) => {
    const data = await fs.readFile(
      viewsFilePath('addBreed.html'),
      'utf-8'
    );
    return data;
  },
  'find-new-home': async (modifiedPath) => {
    const catID = modifiedPath[1];
    const matchingCat = await getCat(catID);
    const data = await fs.readFile(
      viewsFilePath('catShelter.html'),
      'utf-8'
    );
    const breeds = await getBreedsAsOption(matchingCat);
    const modifiedData = data
      .toString()
      .replaceAll('{{name}}', matchingCat.name)
      .replace(
        '{{image}}',
        path.join('/content/images/', matchingCat.image)
      )
      .replace('{{description}}', matchingCat.description)
      .replace('{{breeds}}', breeds);
    return modifiedData;
  },
};

const POSTMethods = {
  'add-breed': async (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const formData = querystring.parse(body);
        const breedName = formData.breed;
        const breeds = await getBreeds();
        const breed = breeds.find((b) => b === breedName);
        if (breed) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Breed already exists.');
        } else {
          breeds.push(breedName);
          await fs.writeFile(
            dataFilePath('breeds.json'),
            JSON.stringify(breeds)
          );
          res.writeHead(302, {
            Location: `http://${req.headers.host}`,
          });
          res.end();
        }
      } catch (err) {
        throw new Error(err.message || 'Internal server error');
      }
    });
  },
  'add-cat': async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try {
        if (err) {
          console.error(err);
          throw new Error('Error parsing form data');
        }
        const { upload } = files;
        const ext = path.extname(upload.originalFilename);
        const image = upload.newFilename + ext;
        const newPath = path.join(
          __dirname,
          '../../content/images/',
          image
        );
        await fs.rename(upload.filepath, newPath);
        const newCat = {
          ...fields,
          image,
          _id: generateRandomId(10),
        };
        const cats = await getCats();
        cats.push(newCat);
        await fs.writeFile(
          dataFilePath('cats.json'),
          JSON.stringify(cats)
        );
        res.writeHead(302, {
          Location: `http://${req.headers.host}`,
        });
        res.end();
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message || 'Internal server error');
      }
    });
  },
  'edit-cat': async (req, res) => {
    const catID = req.modifiedPath[1];
    const cats = await getCats();
    const matchingCatIndex = cats.findIndex((c) => c._id === catID);
    if (matchingCatIndex === -1) {
      throw new Error('Cat not found');
    }
    const currentCat = cats[matchingCatIndex];
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try {
        if (err) {
          console.error(err);
          throw new Error('Error parsing form data');
        }
        const { name, description, breed } = fields;
        const { image } = files;
        if (image.size === 0) {
          delete files.image;
        }
        Object.assign(currentCat, {
          name: name || currentCat.name,
          description: description || currentCat.description,
          breed: breed || currentCat.breed,
          image: files.image || currentCat.image,
        });
        cats[matchingCatIndex] = currentCat;
        await fs.writeFile(
          dataFilePath('cats.json'),
          JSON.stringify(cats)
        );
        res.writeHead(302, {
          Location: `http://${req.headers.host}`,
        });
        return res.end();
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message || 'Internal server error');
      }
    });
  },
  'find-new-home': async (req, res) => {
    const catID = req.modifiedPath[1];
    const cats = await getCats();
    const matchingCatIndex = cats.findIndex((c) => c._id === catID);
    if (matchingCatIndex === -1) {
      throw new Error('Cat not found');
    }
    const modifiedCats = cats.splice(matchingCatIndex - 1, 1);
    await fs.writeFile(
      dataFilePath('cats.json'),
      JSON.stringify(modifiedCats)
    );
    res.writeHead(302, {
      Location: `http://${req.headers.host}`,
    });
    return res.end();
  },
};

module.exports = async (req, res) => {
  try {
    const { modifiedPath, method } = req;
    const pathFirstPart = modifiedPath[0];
    if (method === 'GET') {
      if (GETMethods[pathFirstPart]) {
        const data = await GETMethods[pathFirstPart](modifiedPath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(data);
      } else {
        throw new Error('View not found');
      }
    } else if (method === 'POST') {
      await POSTMethods[pathFirstPart](req, res);
    } else {
      throw new Error('Method not found.');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message || 'Internal server error');
  }
};
