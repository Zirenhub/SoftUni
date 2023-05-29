const express = require('express');
const { createCube, detailsCube } = require('../controllers/cubeController');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('create');
});
router.post('/create', createCube);

router.get('/details/:id', detailsCube);

module.exports = router;
