const mysql = require('mysql');
const myConnectionString = "mysql://netuser:netpass@localhost:3306/library";
const connection = mysql.createPool(myConnectionString);
module.exports = connection;