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

const GETMethods = {
  'add-cat': async () => {
    const breeds = await getBreeds();
    const catBreedPlaceholder = breeds.map(
      (b) => `<option value=${b}>${b}</option>`
    );
    const file = await fs.readFile(
      viewsFilePath('addCat.html'),
      'utf-8'
    );
    return file
      .toString()
      .replace('{{catBreeds}}', catBreedPlaceholder);
  },
  'edit-cat': async () => {
    const data = await fs.readFile(
      viewsFilePath('editCat.html'),
      'utf-8'
    );
    return data;
  },
  'add-breed': async () => {
    const data = await fs.readFile(
      viewsFilePath('addBreed.html'),
      'utf-8'
    );
    return data;
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
};

module.exports = async (req, res) => {
  try {
    const { modifiedPath, method } = req;
    if (method === 'GET') {
      if (GETMethods[modifiedPath[0]]) {
        const data = await GETMethods[modifiedPath[0]]();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(data);
      } else {
        throw new Error('View not found');
      }
    } else if (method === 'POST') {
      await POSTMethods[modifiedPath[0]](req, res);
    }
    throw new Error('Method not found.');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message || 'Internal server error');
  }
};
