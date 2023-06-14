const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
