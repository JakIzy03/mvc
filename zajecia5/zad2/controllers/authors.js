const Author = require('../models/author');

const authors = [
    new Author(1, 'Adam Mickiewicz')
];

exports.getAuthors = (req, res) => {
    res.render('authors', { authors });
};