const express = require('express');
const { getCubes } = require('../controllers/cubeController');
const router = express.Router();

router.get('/', getCubes);

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
