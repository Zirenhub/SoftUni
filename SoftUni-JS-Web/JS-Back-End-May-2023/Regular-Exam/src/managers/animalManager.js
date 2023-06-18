const AnimalModel = require('../models/Animal');

const getAnimal = async (animalID) => {
  const animal = await AnimalModel.findById(animalID).lean();
  if (!animal) {
    throw new Error('Aniaml doesnt exist');
  }
  return animal;
};

const donateAnimal = async (animalID, userID) => {
  const animal = await AnimalModel.findById(animalID);
  if (animal.owner.toString() === userID) {
    throw new Error('Owner cant donate');
  }
  if (animal.donations.find((x) => x.toString() === userID)) {
    throw new Error('You already donated');
  }
  animal.donations.push(userID);
  await animal.save();
  return animal;
};

const deleteAnimal = async (animalID, userID) => {
  const animal = await AnimalModel.findById(animalID);
  if (animal.owner.toString() !== userID) {
    throw new Error('Unauthorized');
  }

  await animal.deleteOne();
};

const editAnimal = async (animalID, animalData, userID) => {
  const updatedAnimal = await AnimalModel.findOneAndUpdate(
    { _id: animalID, owner: userID },
    animalData,
    { new: true, runValidators: true }
  );

  if (!updatedAnimal) {
    throw new Error('Unauthorized');
  }

  return updatedAnimal;
};

module.exports = {
  getAnimal,
  donateAnimal,
  deleteAnimal,
  editAnimal,
};
