const { uuid } = require('uuidv4');

const cubes = [
  {
    _id: uuid(),
    name: 'Classic Cube',
    description: "This is a classic rubik's cube we all know and love!",
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0482/9177/4628/products/o3rmamdfu2kartbxpul9.jpg?v=1681761411',
    difficultyLevel: 3,
  },
  {
    _id: uuid(),
    name: 'Mirror Cube',
    description: 'A very strange cube...',
    imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
    difficultyLevel: 4,
  },
];

const getCubes = (req, res) => {
  const { search, from, to } = req.query;
  let cubes = cubes.slice();
  if (search) {
    cubes = cubes.filter((c) =>
      c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  if (from) {
    cubes = cubes.filter((c) => {
      return c.difficultyLevel >= Number(from);
    });
  }
  if (to) {
    cubes = cubes.filter((c) => {
      return c.difficultyLevel <= Number(to);
    });
  }
  res.render('index', { cubes, query: { search, from, to } });
};

const detailsCube = (req, res) => {
  const cube = cubes.find((c) => c._id === req.paras.id);
  if (cube) {
    res.render('details', cube);
  } else {
    next();
  }
};

const createCube = (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  if (!name || !description || !imageUrl || !difficultyLevel) {
    res.end('All fields should be present');
    // or "next();" for a 404 page.
  }
  cubes.push({ name, description, imageUrl, difficultyLevel, _id: uuid() });

  res.redirect('/');
};

module.exports = {
  getCubes,
  createCube,
  detailsCube,
};
