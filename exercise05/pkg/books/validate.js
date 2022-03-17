const { Validator } = require('node-input-validator');

const Book = {
    name: 'required|string',
    language: 'string',
    genre: 'required|string',
    publicationDate: 'required|date',
    pages: 'integer'
};

const bookPartial = {
    name: 'required|string',
    language: 'string',
    genre: 'required|string',
    publicationDate: 'required|date',
    pages: 'required|integer'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Book,
    validate,
    bookPartial
};
