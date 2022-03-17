const fs = require('fs');

const readData = async (source) => {
    return new Promise((success,fail) => {
        fs.readFile(`${source}.json`, 'utf-8', (err, data) => {
            if(err) return fail(err);
            let out = JSON.parse(data);
            return success(out)
        });
    });
};

const writeData = async (data, destination) => {
    return new Promise((success,fail) => {
        let out = JSON.stringify(data)
        fs.writeFile(`${destination}`, 'utf8', out, err => {
            if(err) return fail(err);
            return success();
        });
    });
};

module.exports = {
    readData,
    writeData
};