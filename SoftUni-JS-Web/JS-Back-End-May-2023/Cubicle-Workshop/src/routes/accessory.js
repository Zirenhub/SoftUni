const express = require('express');
const { createAccessory } = require('../controllers/accessoryController');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('accessory/create');
});
router.post('/create', createAccessory);

module.exports = router;
