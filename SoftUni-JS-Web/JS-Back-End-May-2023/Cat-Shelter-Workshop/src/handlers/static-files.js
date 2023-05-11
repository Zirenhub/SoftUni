const fs = require('fs/promises');
const path = require('path');

function getContentType(url) {
  if (url.endsWith('css')) {
    return 'text/css';
  } else if (url.endsWith('html')) {
    return 'text/html';
  } else if (url.endsWith('png')) {
    return 'image/png';
  } else if (url.endsWith('js')) {
    return 'text/js';
  }
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      throw new Error('content method was not GET');
    }
    const filePath = path.join(
      __dirname,
      path.normalize(`../../${req.url}`)
    );
    const data = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': getContentType(req.url) });
    return res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};
