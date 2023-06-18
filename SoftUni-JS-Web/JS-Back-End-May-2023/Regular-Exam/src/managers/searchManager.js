const AnimalModel = require('../models/Animal');

const findByLocation = async (locationQuery) => {
  const animals = await AnimalModel.find({
    location: { $regex: new RegExp(locationQuery, 'i') },
  }).lean();
  return animals;
};

module.exports = { findByLocation };
