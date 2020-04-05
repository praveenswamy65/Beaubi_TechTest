import React from 'react';
const Pool = require('pg-pool');
const url = require('url')
const connectionString = 'postgres://pvnbotlxjwpmcy:12463bc7f7c177094af39b1b3d28afd1a97eab88bf2d7d6b37c0864a0fbe0bde@ec2-52-87-58-157.compute-1.amazonaws.com:5432/d130271iijru7i'
const params = url.parse(connectionString);
const auth = params.auth.split(':');

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true
};

const pool = new Pool(config);

/*
  Transforms, 'progres://DBuser:secret@DBHost:#####/myDB', into
  config = {
    user: 'DBuser',
    password: 'secret',
    host: 'DBHost',
    port: '#####',
    database: 'myDB',
    ssl: true
  }
*/

export default function getNewArrivals(request, response) {
    alert("Rcvd request");
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
    })
}


