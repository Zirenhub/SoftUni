const express = require('express');
const { createPost } = require('../managers/catalogManager');
const { isAuth } = require('../middlewares/authMiddleware');
const { errorHandler } = require('../util/errorHandler');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('catalog');
});

router.get('/create', isAuth, (req, res) => {
  res.render('catalog/create');
});

router.post('/create', isAuth, async (req, res) => {
  const { name, age, description, location, image } = req.body;
  try {
    await createPost({
      name,
      age,
      description,
      location,
      image,
      owner: req.user._id,
    });
    res.redirect('/catalog');
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.render('catalog/create', { error: errorMessage });
  }
});

module.exports = router;
