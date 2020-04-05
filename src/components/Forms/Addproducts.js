import React from 'react';
const Pool = require('pg-pool');
const url = require('url')

const params = url.parse(process.env.DATABASE_URL);
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

export default async function getNewArrivals(request, response) {
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


