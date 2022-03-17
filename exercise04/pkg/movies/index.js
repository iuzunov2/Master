const mongoose = require('mongoose');

const Movie = mongoose.model(
    'Movies',
    {
        name: String,
        premiere: Date,
        genre: String,
        actors: [String],
        awards: [String],
        director: String
    },
    'Movies'
);

const addMovie = async (movie) => {
    let m = new Movie(movie);
    return await m.save();
};

const removeMovie = async (id) => {
    return await Movie.deleteOne ({_id: id});
};

const updateMovie = async (id,movie) => {
    return await Movie.updateOne ({id: id}, movie);
};

const getAllMovies = async () => {
    return await Movie.find({});
};

const getOne = async (id) => {
    return await Movie.findOne({id: id});
};

module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getOne
};