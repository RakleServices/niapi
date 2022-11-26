const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rohit123_ni',
    password: 'z5g]gfKgshB}',
    database: 'rohit123_nilami'
})

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;