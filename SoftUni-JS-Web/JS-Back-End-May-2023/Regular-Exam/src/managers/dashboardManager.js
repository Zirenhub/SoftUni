const AnimalModel = require('../models/Animal');

const createNewAnimal = async (animalData) => {
  const newAnimal = new AnimalModel(animalData);
  await newAnimal.save();
  return newAnimal;
};

const getAll = async () => {
  const allAnimals = await AnimalModel.find({}).lean();
  return allAnimals;
};

module.exports = {
  getAll,
  createNewAnimal,
};
