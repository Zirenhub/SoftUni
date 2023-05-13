const fs = require('fs/promises');

function getContentType(url) {
  if (url.endsWith('css')) {
    return 'text/css';
  } else if (url.endsWith('html')) {
    return 'text/html';
  } else if (url.endsWith('png')) {
    return 'image/png';
  } else if (url.endsWith('js')) {
    return 'text/js';
  } else if (url.endsWith('jpg')) {
    return 'image/jpg';
  } else if (url.endsWith('jpeg')) {
    return 'image/jpeg';
  }
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      throw new Error('content method was not GET');
    }
    const { modifiedPath } = req;
    const [type, file] = modifiedPath;
    let data = null;
    if (
      file.endsWith('png') ||
      file.endsWith('jpg') ||
      file.endsWith('jpeg') ||
      file.endsWith('ico')
    ) {
      data = await fs.readFile(`./${req.url}`);
    } else {
      data = await fs.readFile(`./${req.url}`, 'utf-8');
    }

    res.writeHead(200, { 'Content-Type': getContentType(req.url) });
    return res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};
