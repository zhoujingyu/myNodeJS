'use strict';
//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: '',
    database:'test'
});

connection.connect();

module.exports = QueryDB;

function QueryDB(){

}

QueryDB.prototype.getPictureList = function(){
    connection.query('select * from image',function(err, rows, fields) {
        if (err) {
            console.error(err);
            return false;
        }
        return rows;
    });
};

module.exports = QueryDB;