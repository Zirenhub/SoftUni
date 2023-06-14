const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

const {
  createOffer,
  buyOffer,
  getOffer,
  updateOffer,
  deleteOffer,
} = require('../managers/offerManager');
const createOfferPlatform = require('../util/createOfferPlatform');

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.get('/edit/:id', isAuth, async (req, res) => {
  try {
    const offer = await getOffer(req.params.id);
    if (offer.owner !== req.user._id) {
      throw new Error('Unauthorized');
    }
    const platforms = createOfferPlatform(offer);

    res.render('edit', { offer, platforms });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.get('/delete/:id', isAuth, async (req, res) => {
  try {
    const offer = await getOffer(req.params.id);
    if (offer.owner !== req.user._id) {
      throw new Error('Unauthorized');
    }
    await deleteOffer(offer._id, req.user._id);

    res.redirect('/catalog');
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.post('/edit/:id', isAuth, async (req, res) => {
  try {
    const offer = await getOffer(req.params.id);
    if (offer.owner !== req.user._id) {
      throw new Error('Unauthorized');
    }
    const { name, platform, image, price, genre, description } = req.body;
    await updateOffer({
      _id: offer._id,
      name,
      platform,
      image,
      price,
      genre,
      description,
    });

    res.redirect(`/catalog/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.get('/buy/:id', isAuth, async (req, res) => {
  try {
    await buyOffer(req.params.id, req.user._id);

    res.redirect(`/catalog/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.post('/create', isAuth, async (req, res) => {
  try {
    const { name, platform, image, price, genre, description } = req.body;
    await createOffer({
      name,
      platform,
      image,
      price,
      genre,
      description,
      owner: req.user._id,
    });

    res.redirect('/catalog');
  } catch (err) {
    res.render('create', { error: err.message });
  }
});

module.exports = router;
