const fs = require('fs/promises');
const path = require('path');
const formidable = require('formidable');
const querystring = require('querystring');
const crypto = require('crypto');

function generateRandomId(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

const dataFilePath = (name) => {
  return path.join(__dirname, `../data/${name}`);
};
const viewsFilePath = (name) => {
  return path.join(__dirname, `../../views/${name}`);
};

module.exports = async (req, res) => {
  try {
    const breedsJSON = await fs.readFile(dataFilePath('breeds.json'));
    const breeds = JSON.parse(breedsJSON);

    const { modifiedPath, method } = req;
    if (method === 'GET') {
      let data = null;

      if (modifiedPath === 'add-cat') {
        const catBreedPlaceholder = breeds.map(
          (b) => `<option value=${b}>${b}</option>`
        );
        const file = await fs.readFile(
          viewsFilePath('addCat.html'),
          'utf-8'
        );
        data = file
          .toString()
          .replace('{{catBreeds}}', catBreedPlaceholder);
      } else if (modifiedPath === 'edit-cat') {
        data = await fs.readFile(
          viewsFilePath('editCat.html'),
          'utf-8'
        );
      } else if (modifiedPath === 'add-breed') {
        data = await fs.readFile(
          viewsFilePath('addBreed.html'),
          'utf-8'
        );
      }
      if (data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      } else {
        throw new Error('View not found');
      }
    } else if (method === 'POST') {
      if (modifiedPath === 'add-breed') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          const formData = querystring.parse(body);
          const breedName = formData.breed;
          const breed = breeds.find((b) => b === breedName);
          if (breed) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Breed already exists.');
          } else {
            breeds.push(breedName);
            await fs.writeFile(
              filePath('breeds.json'),
              JSON.stringify(breeds)
            );
            res.writeHead(302, {
              Location: `http://${req.headers.host}`,
            });
            res.end();
          }
        });
      } else if (modifiedPath === 'add-cat') {
        const form = new formidable.IncomingForm({
          encoding: 'utf-8',
          uploadDir: path.join(__dirname, '../../content/images/'),
        });
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error(err);
            throw new Error('Error parsing form data');
          }
          const image =
            files.upload.newFilename +
            '.' +
            files.upload.originalFilename.split('.')[1];
          const newCat = {
            ...fields,
            image,
            _id: generateRandomId(10),
          };
          console.log(newCat);
        });
      }
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message);
  }
};
