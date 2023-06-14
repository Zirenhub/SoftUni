const GameModel = require('../models/Game');

const getAllOffers = async () => {
  const allOffers = await GameModel.find({}).lean();
  return allOffers;
};

const getOffer = async (id) => {
  const offer = await GameModel.findById(id).lean();
  offer.owner = offer.owner.toString();
  offer._id = offer._id.toString();
  if (!offer) {
    throw new Error('No offer has been found');
  }
  return offer;
};

module.exports = {
  getAllOffers,
  getOffer,
};
