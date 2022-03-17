const players = require('../pkg/players');

const getAll = async (req, res) => {
    try {
        let ps = await players.getAllCars();
        return res.status(200).send(ps)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
};

const getOne = async (req, res) => {
    try {
        let ps = await players.getOne(Number(req.params.id));
        return res.status(200).send(ps);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Inetrnal server error");
    };
};

const create = async (req, res) => {
    try {
        await players.addPlayer(req.body);
        return res.status(201).send(req.body);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    };
};

const update = async (req, res) => {
    try {
        await players.updatePlayer(Number(req.params.id), req.body);
        return res.status(204).send("Player Updated")
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
}

const updatePartial = async (req, res) => {
    try {
        await players.partialUpdatePlayer(Number(req.params.body))
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    };
};


const remove = async (req, res) => {
    try {
        await players.removePlayer(Number(req.params.id));
        return res.status(200).send(req.body);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    };
};


module.exports = {
    getAll,
    getOne,
    update,
    create,
    updatePartial,
    remove
};