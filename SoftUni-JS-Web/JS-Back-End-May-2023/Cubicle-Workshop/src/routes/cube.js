const express = require('express');
const router = express.Router();

router.get('/create', (req, res) => {
  res.end('create cube form');
});

router.get('/:id/details', (req, res) => {
  res.end('cube details');
});

module.exports = router;
