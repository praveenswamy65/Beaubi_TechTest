//import React from 'react';
/*const {Pool, Client} = require('pg')
const connectionString = 'postgres://pvnbotlxjwpmcy:12463bc7f7c177094af39b1b3d28afd1a97eab88bf2d7d6b37c0864a0fbe0bde@ec2-52-87-58-157.compute-1.amazonaws.com:5432/d130271iijru7i'
const pool = new Pool({
    connectionString: connectionString,
})
const client = new Client({
    connectionString: connectionString,
})

async function getNewArrivals(request, response) {
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
    })

    client.connect()
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        client.end()
    })

}

/*'module.export' allows multiple functions to be exported at the same time! No need to declare
 one by one (ie export const deleteUser(){}).
 With ES6 syntax, its getUsers instead of getUsers:getUsers*/
/*module.exports = {
    getNewArrivals,
}
*/