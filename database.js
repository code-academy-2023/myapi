const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
//const myConnectionString = "mysql://netuser:netpass@localhost:3306/library";
//const connection = mysql.createPool(myConnectionString);
const connection = mysql.createPool(process.env.MYSQL_SERVER);
module.exports = connection;