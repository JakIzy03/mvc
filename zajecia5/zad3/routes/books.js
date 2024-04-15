const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/book/list', booksController.getBooks);
router.get('/book/add', booksController.addBookview);
router.post('/book/add', booksController.addBook);

router.delete('/book/delete/:id', booksController.deleteBook);

module.exports = router;