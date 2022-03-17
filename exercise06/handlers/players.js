const players = require('../pkg/players/index');
const playersMongo = require('../pkg/players/mongo');


const getAll = async (req,res) => {
    try {
        let ps = await players.getAllPlayers();
        return res.status(200).send(ps);
    } catch (error) {
        console.log(error);
       return res.status(500).send("Internal server error");
    }
};

const getOne = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
};

const create = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
};

const update = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
};

const updatePartial = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
};

const remove = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
};
