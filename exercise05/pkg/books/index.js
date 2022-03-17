const mongoose = require('mongoose');

const Book = mongoose.model (
    'Books',
    {
        name: String,
        language: String,
        genre: String,
        publicationDate: Date,
        pages: String
    },
    'Books'
);

const addBook = async (book) => {
    let b = new Book(book);
    return await b.save();
};

const removeBook = async (id) => {
    return await Book.deleteOne({_id: id});
};

const updateBook = async (id,book) => {
    return await Book.updateOne({_id: id}, book)
};

const getAllBooks = async () => {
    return await Book.find({});
};

const getOne = async (id) => {
    return await Book.findOne({_id: id})
};

module.exports = {
    addBook,
    removeBook,
    updateBook,
    getAllBooks,
    getOne
};