const fs = require('fs/promises');
const path = require('path');
// const cats = require('../data/cats.json');

module.exports = async (req, res) => {
  try {
    if (req.url === '/' && req.method === 'GET') {
      const filePath = path.join(
        __dirname,
        '../../views/home/index.html'
      );
      const data = await fs.readFile(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(data);
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};
