const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    database : 'express-demo',
    password : 'Aditya@24'
})

module.exports = pool.promise()