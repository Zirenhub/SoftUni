const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const catalogController = require('./controllers/catalogController');
const postController = require('./controllers/postController');

router.use(homeController);
router.use('/auth', authController);
router.use('/catalog', catalogController);
router.use('/post', postController);

module.exports = router;
