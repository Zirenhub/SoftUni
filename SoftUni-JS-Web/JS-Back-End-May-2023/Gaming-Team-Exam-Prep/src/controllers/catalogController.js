const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

const { getAllOffers, getOffer } = require('../managers/catalogManager');

router.get('/', async (req, res) => {
  try {
    const allOffers = await getAllOffers();
    res.render('catalog', {
      offers: allOffers,
      hasOffers: allOffers.length > 0,
    });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const currentOffer = await getOffer(req.params.id);

    const getOfferDetails = () => {
      const props = {
        offer: currentOffer,
      };
      if (req.user) {
        props.isOwner = currentOffer.owner === req.user._id;
        const boughtOffer = currentOffer.boughtBy.find(
          (x) => x.toString() === req.user._id
        );
        boughtOffer ? (props.boughtOffer = true) : (props.boughtOffer = false);
      }

      return props;
    };

    res.render('details', getOfferDetails());
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

module.exports = router;
