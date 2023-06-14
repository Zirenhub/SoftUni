const GameModel = require('../models/Game');

const platforms = ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];

const getOffer = async (offerID) => {
  const offer = await GameModel.findById(offerID).lean();
  if (!offer) {
    throw new Error('Offer not found');
  }
  offer.owner = offer.owner.toString();
  offer._id = offer._id.toString();

  return offer;
};

const createOffer = async (offerData) => {
  const { name, platform, image, price, genre, description } = offerData;
  if (!platforms.includes(platform)) {
    throw new Error('Platform is invalid');
  }
  if (name.length < 4) {
    throw new Error('Name length should be higher than 4 characters');
  }
  if (!image.startsWith('http://') && !image.startsWith('https://')) {
    throw new Error('Invalid image url');
  }
  if (price < 1) {
    throw new Error('Price should be a positive number');
  }
  if (genre.length < 2) {
    throw new Error('Genre length should be higher than 2 characters');
  }
  if (description.length < 10) {
    throw new Error('Description length should be higher than 10 characters');
  }
  const newGame = new GameModel(offerData);
  await newGame.save();
  return newGame;
};

const buyOffer = async (offerID, buyerID) => {
  const game = await getOffer(offerID);
  const hasAlreadyBought = game.boughtBy.find((x) => x.toString() === buyerID);
  if (hasAlreadyBought) {
    throw new Error('You already bought this offer');
  }
  if (game.owner.toString() === buyerID) {
    throw new Error('The owner cant buy its own offer');
  }
  game.boughtBy.push(buyerID);
  await game.save();
  return game;
};

const updateOffer = async (offerData) => {
  const offer = await GameModel.findByIdAndUpdate(offerData._id, offerData, {
    new: true,
    runValidators: true,
  });

  return offer;
};

const deleteOffer = async (offerID, ownerID) => {
  const offer = await getOffer(offerID);
  if (offer.owner !== ownerID) {
    throw new Error('Unauthorized');
  }
  await GameModel.findByIdAndDelete(offerID);
};

module.exports = {
  createOffer,
  buyOffer,
  getOffer,
  updateOffer,
  deleteOffer,
};
