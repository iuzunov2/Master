const mongoose = require('mongoose');

const Player = mongoose.model (
    'Players',
    {
        name: String,
        sport: String,
        Age: Number,
    },
    'Players'
);

const addPlayer = async (player) => {
    let p = new Player(player);
    return await p.save(); 
};

const removePlayer = async (id) => {
    return await Player.deleteOne({_id: id});
};

const updatePlayer = async (id,player) => {
    return await Player.updateOne({_id: id}, player);
};

const getAllPlayers = async () => {
    return await Player.find({_id: id});
};

const getOne = async (id) => {
    return await Player.findOne({_id: id});
};

module.exports = {
    addPlayer,
    removePlayer,
    updatePlayer,
    getAllPlayers,
    getOne
};