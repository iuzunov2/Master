
const express = require('express');

const api = express()

api.use(express.json());


api.listen(10000, err => {
    if(err) console.log(err);
    return console.log("Server started on port 10000");
});