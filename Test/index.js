const express = require('express');
require('./pkg/db');

const api = express()

api.use(express.json())


api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get('service').port}`);
});