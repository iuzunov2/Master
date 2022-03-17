const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`

const addPlayer = async (player) => {
    try {
        let data = await files.readData(DATA_SOURCE)
        data.push(player)
        await files.writeData(data,DATA_SOURCE)
    } catch (error) {
        throw err;
    }
};

const removePlayer =  async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.readData(out,DATA_SOURCE);
    } catch (error) {
        console.log(error);
    };
};

const updatePlayer =  async (index,player) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((p, i) => {
            if (index === i) {
                p = player
            }
            return p
        });
        await files.writeData(out,DATA_SOURCE)
    } catch (error) {
        throw error
    };
};

const partialUpdatePlayer =  async (index,player) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((p, i) => {
            if (index === i) {
                p = {
                    ...p,
                    ...player,
                }
            }
            return p
        });
        await files.writeData(out,DATA_SOURCE)
    } catch (error) {
        throw error
    };
};

const getAllPlayer =  async () => {
    try {
        let data = files.readData(DATA_SOURCE);
        return data[index];
    } catch (error) {
        throw (error);
    };
};

const getPlayerByIndex =  async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addPlayer,
    removePlayer,
    updatePlayer,
    getAllPlayer,
    getPlayerByIndex,
    partialUpdatePlayer
}