const mongoose = require('mongoose');

const host = 'kancelariskazabava.euknd.mongodb.net';
const username = 'Icko';
const password = 'Testing111!';
const dbname = 'myFirstDatabase';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    DSN,
    {useNewUrlParser: true, useUnifiedTopology: true},
        err => {
            if(err) {
                return console.log("Could not connect to DB", err);
            };
            console.log("Successfully not connect to DB");
        }
);

// REST API

// POST - create data record
// GET - retrieve data record
// PUT - update whole data record
// PATCH - partial update of data record
// DELETE - delete a data record

// {
//     first_name: "Pero",
//     last_name: "Perovski",
//     age: 62,
//     location: {
//         city: "Skopje",
//         country: "Macedonia"
//     }
// }

// *users* is a data resource
// GET /api/users - list all users [200, 500]
// GET /api/users/:id - get data fro user with id = :id [200, 404, 500] 
// POST /api/users - add/create user (only one) [201, 400, 500]
// PUT /api/users/:id - update user with id = :id [200, 400, 404, 500]
// PATCH /api/users/:id - partial update user with id = :id [200, 400, 404, 500]
// DELETE /api/users/:id - delete user with id = :id [204, 400, 404, 500]

// user subresources
// GET /api/users/:id/location - get the location for user with id = :id
// PUT /api/users/:id/location
// PATCH /api/users/:id/location

// 2** success (200 - ok, 201 - created, 204 - no content)
// 3** redirect
// 4** application error
// 5** server error


// ... spread operator
// used for destructuring

// let a = {
//     ime: 'pero',
//     prezime: 'perovski'
// };

// let c = {
//     vozrast: 34
// };

// let d = {
//     ime: 'janko'
// };

// let b = {...a, ...c, ...d};

// u = {...u, ...user};

// {
//     ime: 'pero',
//     prezime: 'perovski',
//     vozrast: 34,
//     ime: 'janko'
// }