const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

const projectDir = path.join(__dirname, '../');

const generateRandomId = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};
const dataFilePath = (name) => {
  return path.join(projectDir, '/src/data', name);
};
const viewsFilePath = (name) => {
  return path.join(projectDir, '/views/', name);
};
const getBreeds = async () => {
  const breedsJSON = await fs.readFile(dataFilePath('breeds.json'));
  const breeds = JSON.parse(breedsJSON);
  return breeds;
};
const getCats = async () => {
  const catsJSON = await fs.readFile(dataFilePath('cats.json'));
  const cats = JSON.parse(catsJSON);
  return cats;
};

module.exports = {
  generateRandomId,
  dataFilePath,
  viewsFilePath,
  getBreeds,
  getCats,
};
