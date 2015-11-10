var mysql = require('mysql');
var go = require('requery.js');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

go.requery('SELECT * FROM `table` WHERE `field` = 1 LIMIT 1', function (error, results) {
  console.log('ok');
}

//I'm not sure that it works lol :D
