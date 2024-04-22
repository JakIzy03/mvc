const Book = require('../models/Book');
const User = require('../models/User');

const getBookDetails = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const user = User.getAll().find(user => user.id === parseInt(userId));
    const didUserBorrowTheBook = user.findBorrowedBookById(bookId);

    response.render("book-details", { title: "Book Details", book, didUserBorrowTheBook });
};


const postBookBorrow = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const user = User.getAll().find(user => user.id === parseInt(userId));
    if (book && user) {
        if (book.available) {
            Book.borrow(book);
            user.borrowBook(book);
            response.redirect("/books/borrow/success");
            return;
        }
    }
    response.redirect("/");
};

const getBookBorrowSuccess = (request, response) => {
    response.render("success", { title: "Success", message: "Book borrowed successfully" });
};

const postBookReturn = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const user = User.getAll().find(user => user.id === parseInt(userId));
    if (book && user) {
        if (!book.available) {
            Book.return(book);
            user.returnBook(bookId);
            response.redirect("/books/return/success");
            return;
        }
    }
    response.redirect("/");
};

const getBookReturnSuccess = (request, response) => {
    response.render("success", { title: "Success", message: "Book returned successfully" });
};

const getBooksList = (request, response) => {
    const books = Book.getAll();
    const userId = request.session.userId;
    response.render("books", { title: "Books", userId: userId, books: books });
};

module.exports = {
    getBooksList,
    getBookDetails,
    postBookBorrow,
    getBookBorrowSuccess,
    postBookReturn,
    getBookReturnSuccess
};
