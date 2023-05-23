const express = require('express');
const { createCube, findCube } = require('../controllers/cubeController');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  if (!name || !description || !imageUrl || !difficultyLevel) {
    res.end('All fields should be present');
    // or
    // next();
  }
  createCube({ name, description, imageUrl, difficultyLevel });
  res.redirect('/');
});

router.get('/details/:id', (req, res, next) => {
  const cube = findCube(req.params.id);
  if (cube) {
    res.render('details', cube);
  } else {
    next();
  }
});

module.exports = router;
