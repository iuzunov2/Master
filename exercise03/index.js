const express = require('express');
const players = require('./handlers/players')

const api = express();

api.use(express.json());

api.get('/api/players', players.getAll);
api.get('/api/players/:id', players.getOne);
api.post('/api/players', players.create);
api.put('/api/players/:id', players.update);
api.patch('/api/players/:id', players.updatePartial);
api.delete('/api/players/:id', players.remove);


api.listen(10000, err =>{
    if (err) return console.log(err);
    return console.log('Server started on port 10000');
});