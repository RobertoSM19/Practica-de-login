const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'login',
    password:''
});

connection.connect();
module.exports=connection;