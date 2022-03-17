const moviesMongo = require('../pkg/movies');

const getAll = async (req,res) => {
    try {
        let mo = await moviesMongo.getAllMovies();
        res.status(200).send(mo);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    };
};

const getOne = async (req,res) => {
    try {
        let mo = moviesMongo.getOne(req.params.id);
        return res.status(200).send(mo);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    };
};

const create = async (req,res) => {
    try {
        let m = await moviesMongo.addMovie(req.body);
        return res.status(201).send(m);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    };
};

const update = async (req,res) => {
    try {
        await moviesMongo.updateMovie(req.params.id, req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
         return res.status(500).send("Internal Server error");
    };
};

const updatePartial = async (req,res) => {
    try {
        await moviesMongo.updateMovie(req.params.id, req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    };
};

const remove = async (req,res) => {
    try {
        let mo = moviesMongo.removeMovie(req.params.id);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    };
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
};