const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const animalController = require('./controllers/animalController');
const searchController = require('./controllers/searchController');

router.use(homeController);
router.use('/auth', authController);
router.use('/dashboard', dashboardController);
router.use('/animal', animalController);
router.use('/search', searchController);

module.exports = router;
