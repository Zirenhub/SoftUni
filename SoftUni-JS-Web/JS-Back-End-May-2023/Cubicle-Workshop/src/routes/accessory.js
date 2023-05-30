const express = require('express');
const {
  createAccessory,
  getAttachAccessory,
  postAttachAccessory,
} = require('../controllers/accessoryController');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('accessory/create');
});
router.post('/create', createAccessory);

router.get('/attach/:id', getAttachAccessory);
router.post('/attach/:id', postAttachAccessory);

module.exports = router;
