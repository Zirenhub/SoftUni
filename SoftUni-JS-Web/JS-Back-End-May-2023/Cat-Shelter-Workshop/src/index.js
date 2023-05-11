const http = require('http');
const homeView = require('./handlers/home');
const addEditCat = require('./handlers/cat');
const staticFiles = require('./handlers/static-files');

const port = 3000;

const routes = {
  '/': homeView,
  cats: addEditCat,
  content: staticFiles,
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname =
      url.pathname === '/'
        ? ['/']
        : url.pathname.slice(1, url.pathname.length).split('/');
    const view = routes[pathname[0]];
    if (view) {
      if (pathname.length > 1) {
        pathname.shift();
      }
      req.modifiedPath = pathname.join('/');
      view(req, res);
    } else {
      throw new Error('Internal Server Error');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message);
  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
