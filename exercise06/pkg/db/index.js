const mongoose = require('mongoose');

const host = "Icko"
const username = "kancelariskazabava.euknd.mongodb.net"
const password = "Testing111!"
const dbname = "myFirstDatabase"


let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    DSN, 
    // {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if(err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully conneted to DB');
    }
);