const Book = require('../models/book');

const books = [
    new Book(1, 'Pan Tadeusz', 2000, 1)
];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};