const express = require('express');
const { getCubes } = require('../controllers/cubeController');
const router = express.Router();

router.get('/', (req, res) => {
  const { search, from, to } = req.query;
  const cubes = getCubes(search, from, to);
  res.render('index', { cubes, query: { search, from, to } });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
