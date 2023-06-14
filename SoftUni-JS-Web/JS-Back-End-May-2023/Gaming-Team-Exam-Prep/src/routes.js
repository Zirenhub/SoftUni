const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const catalogController = require('./controllers/catalogController');
const offerController = require('./controllers/offerController');

router.use(homeController);
router.use('/catalog', catalogController);
router.use('/offer', offerController);
router.use('/auth', authController);

module.exports = router;
