const Book = require('../models/book');

const books = [
    new Book(1, 'Pan Tadeusz', 2000, 1)
];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};

exports.addBookview = (req, res) => {
    res.render('add-book');
};

exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const id = books.length + 1;
    const newBook = new Book(id, title, publishingYear, authorId);
    books.push(newBook);
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const id = req.params.id;
    books = books.filter(book => book.id !== parseInt(id));
    res.redirect('/book/list');
};