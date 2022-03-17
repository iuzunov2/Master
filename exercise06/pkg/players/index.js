const files = require('../files');
const DATA_SOURCE = require(`${__dirname}/../../data`);

const addPlayer = async (player) => {
    try {
        let  data = await files.readData(DATA_SOURCE);
        data.push(player)
    } catch (error) {
        throw error;
    }
}

const removePlayer = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i)
    } catch (error) {
        throw error;
    }
}

const updatePlayer = async (index,player) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((p, i) => {
            if(index !== i) {
                p = player
            }
            return p
        });
        await files.writeData(out, DATA_SOURCE);
    } catch (error) {
        throw error
    }
}

const getAllPlayers = async () => {
    try {
        let data = files.readData(DATA_SOURCE);
        return data
    } catch (error) {
        return error
    }
}

const getPlayerByIndex = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getAllPlayers,
    getPlayerByIndex,
    addPlayer,
    removePlayer,
    updatePlayer
};