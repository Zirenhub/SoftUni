const express = require('express');
const { getLastThreeAdded } = require('../managers/homeManager');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const lastThree = await getLastThreeAdded();
    res.render('home', { lastThree });
  } catch (err) {
    res.render('home', { lastThree: [], error: err.message });
  }
});

module.exports = router;
