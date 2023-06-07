const express = require('express');
const {
  createCube,
  detailsCube,
  getEditCube,
  postEditCube,
  getDeleteCube,
  postDeleteCube,
} = require('../controllers/cubeController');
const { isAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/create', isAuth, (req, res) => {
  res.render('cube/create');
});
router.get('/details/:id', detailsCube);
router.get('/edit/:id', isAuth, getEditCube);
router.get('/delete/:id', isAuth, getDeleteCube);

router.post('/create', isAuth, createCube);
router.post('/edit/:id', isAuth, postEditCube);
router.post('/delete/:id', isAuth, postDeleteCube);

module.exports = router;
