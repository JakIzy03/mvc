const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/user/set', userController.getSetUserSession);

router.post('/user/set', userController.setUserSession);

module.exports = router;