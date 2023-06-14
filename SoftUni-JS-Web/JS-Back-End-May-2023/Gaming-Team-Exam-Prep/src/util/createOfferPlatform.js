const platforms = ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];

const createOfferPlatform = (offer) => {
  const output = platforms.map((p) => {
    return { value: p, selected: offer.platform === p };
  });

  return output;
};

module.exports = createOfferPlatform;
