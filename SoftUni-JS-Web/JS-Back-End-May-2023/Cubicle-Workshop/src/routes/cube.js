const express = require('express');
const { createCube, detailsCube } = require('../controllers/cubeController');
const { isAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/create', isAuth, (req, res) => {
  res.render('cube/create');
});
router.post('/create', isAuth, createCube);

router.get('/details/:id', detailsCube);

module.exports = router;
