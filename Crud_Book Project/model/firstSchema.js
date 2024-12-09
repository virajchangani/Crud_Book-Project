const mongoose = require("mongoose");

const schema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Book", schema);
module.exports = Book;
