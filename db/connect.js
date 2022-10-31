const mysql = require("mysql2");

// This connects to the sql databse
const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});

module.exports=connection;