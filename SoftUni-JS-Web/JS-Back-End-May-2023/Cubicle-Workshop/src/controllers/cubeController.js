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

function getCubes(search, from, to) {
  let result = cubes.slice();
  if (search) {
    result = result.filter((c) =>
      c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  if (from) {
    result = result.filter((c) => {
      return c.difficultyLevel >= Number(from);
    });
  }
  if (to) {
    result = result.filter((c) => {
      return c.difficultyLevel <= Number(to);
    });
  }
  return result;
}

function findCube(id) {
  const foundCube = cubes.find((c) => c._id === id);
  return foundCube;
}

function createCube(cube) {
  cubes.push({ ...cube, _id: uuid() });
}

module.exports = {
  getCubes,
  createCube,
  findCube,
};
