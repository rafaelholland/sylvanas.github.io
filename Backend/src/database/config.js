var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'xadrez',
    password : '1234',
    database : 'xadrez',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});

module.exports = connection;