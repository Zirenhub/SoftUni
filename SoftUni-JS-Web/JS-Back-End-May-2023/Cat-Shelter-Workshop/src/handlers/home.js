const fs = require('fs/promises');
const path = require('path');
const {
  getBreeds,
  getCats,
  generateRandomId,
  dataFilePath,
  viewsFilePath,
} = require('../api');

module.exports = async (req, res) => {
  try {
    if (req.url === '/' && req.method === 'GET') {
      const filePath = path.join(
        __dirname,
        '../../views/home/index.html'
      );
      const cats = await getCats();
      const modifiedCats = cats.map((c) => {
        return `
        <li>
          <img src="${path.join('/content/images/', c.image)}" alt="${
          c.name
        }">
          <h3>${c.name}</h3>
          <p><span>Breed: </span>${c.breed}</p>
          <p><span>Description: </span>${c.description}</p>
          <ul class="buttons">
            <li class="btn edit"><a href="/cats/edit-cat/${
              c._id
            }">Change Info</a></li>
            <li class="btn delete"><a href="/cats-find-new-home/${
              c._id
            }">New Home</a></li>
          </ul>
        </li>
        `;
      });

      const data = await fs.readFile(filePath, 'utf-8');
      const modifiedData = data
        .toString()
        .replace('{{cats}}', modifiedCats);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(modifiedData);
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message || 'Internal Server Error');
  }
};
