const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

router.get('/author/list', authorsController.getAuthors);

module.exports = router;