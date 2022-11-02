const mysql = require("mysql2");

// This connects to the sql databse
const connection = mysql.createConnection({
    host: "",
    user: "root",
    password: "password",
    database: "department_db"
});

module.exports=connection;