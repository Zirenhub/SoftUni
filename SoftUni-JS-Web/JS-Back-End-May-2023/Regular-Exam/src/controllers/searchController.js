const express = require('express');
const { findByLocation } = require('../managers/searchManager');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('search');
});

router.get('/query', async (req, res) => {
  try {
    const searchQuery = req.query.search.toLowerCase();
    const animals = await findByLocation(searchQuery);
    res.render('search', { animals, hasAnimals: animals.length > 0 });
  } catch (err) {
    console.log(err);
    res.render('search', {
      animals: [],
      hasAnimals: false,
      error: err.message,
    });
  }
});

module.exports = router;
