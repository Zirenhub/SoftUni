const AnimalModel = require('../models/Animal');

const getLastThreeAdded = async () => {
  const lastThree = await AnimalModel.find({})
    .sort({ createdAt: 'desc' })
    .limit(3)
    .lean();
  return lastThree;
};

module.exports = { getLastThreeAdded };
