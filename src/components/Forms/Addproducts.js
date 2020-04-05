import React, {Component} from 'react';
const {Pool, Client} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'products',
    password: 'admin',
    port: 5432,
})

/*const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'products',
    password: 'admin',
    port: 5432,
})*/

const addProducts = {
    productAdd(request,response) {
        alert("Hello");
        pool.query('SELECT * FROM brands', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
}

export default addProducts // no semi-colon
//export postTableData