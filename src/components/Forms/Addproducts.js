//import React from 'react';
const {Pool, Client} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'products',
    password: 'admin',
    port: 5432,
})

async function getNewArrivals (request, response) {
    console.log('Request for new arrivals received');
    pool.query('SELECT * FROM brands', (error, results) => {
            if (error) {
                throw error
            }
            //response.status(200).json(results.rows),
                response.send(results.rows);
    })

}

/*'module.export' allows multiple functions to be exported at the same time! No need to declare
 one by one (ie export const deleteUser(){}).
 With ES6 syntax, its getUsers instead of getUsers:getUsers*/
module.exports = {
    getNewArrivals,
}