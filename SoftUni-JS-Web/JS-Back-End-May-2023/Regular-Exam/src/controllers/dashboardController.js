const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');
const { errorHandler } = require('../util/errorHandler');
const { createNewAnimal, getAll } = require('../managers/dashboardManager');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allAnimals = await getAll();
    res.render('dashboard', { allAnimals, hasAnimals: allAnimals.length > 0 });
  } catch (err) {
    res.render('dashboard', {
      allAnimals: [],
      hasAnimals: false,
      error: err.message,
    });
  }
});

router.get('/add', isAuth, async (req, res) => {
  res.render('create');
});

router.post('/add', isAuth, async (req, res) => {
  try {
    const { name, years, kind, image, need, location, description } = req.body;
    const animal = await createNewAnimal({
      name,
      years,
      kind,
      image,
      need,
      location,
      description,
      owner: req.user._id,
    });
    res.redirect('/dashboard');
  } catch (err) {
    const error = errorHandler(err);
    res.render('create', { error });
  }
});

module.exports = router;
