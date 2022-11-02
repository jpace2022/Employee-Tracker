const inquirer = require("inquirer");
const cTable = require("console.table");
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// // Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
   {
     host: 'localhost',
     // MySQL username,
     user: 'root',
     // MySQL password
     password: 'password',
     database: 'department_db'
   },
   console.log(`Connected to the department_db database.`)
 );

 app.get("/",(req,res)=>{
     console.log("Homepage!")
 })

 app.listen(PORT,()=>{
     console.log(`listen in port ${PORT}!`)
 })

function menu() {
    return inquirer.createPromptModule([
        {
            type: "list",
            name: "title",
            message: "How would you like to proceed?",
            choices: ["View departments?", "View roles?", "View employees?", "Add department?", "Add role?", "Add employee?", "Update roles?", "Leave?"]
        }
    ])

    .then(function(userChoice){
        if (userChoice.title==="View departments?"){
            viewDept()
        }
        if (userChoice.title==="View roles?"){
            viewDept()
        }
        if (userChoice.title==="View employees?"){
            viewDept()
        }
        if (userChoice.title==="Add deparment?"){
            viewDept()
        }
        if (userChoice.title==="Add role?"){
            viewDept()
        }
        if (userChoice.title==="Add employee?"){
            viewDept()
        }
        if (userChoice.title==="Update roles?"){
            viewDept()
        }
        if (userChoice.title==="Leave?"){
            console.log("Bye")
        }
    })
}

function viewDept(){
    const sql = `SELECT * FROM department`

    db.query(sql, function(err, results){
        console.table(results)
        menu()
    })
}

function viewEmployees(){
    const sql = `SELECT * FROM employee`

    db.query(sql, function(err, results){
        console.table(results)
        menu()
    })
}


function viewRoles() {
    const sql = `SELECT * FROM role`

    db.query(sql, function(err, results){
        console.table(results)
    })
}

function addDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Dept_name",
            message: "Please enter department"
        }
    ])
    .then(function(userChoice){
        const sql = `INSERT INTO department (name) VALUES(?)`

        db.query(sql,[userChoice.Dept_name], function(err, results) {
            console.log("Department added to database!")
            menu()
        })
    })
}

function addRole(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter title name."
        },
        {
            type: "input",
            name: "salary",
            message: "Enter salary."
        },
        {
            type: "input",
            name: "department_id",
            message: "Enter department_id."
        },
    ])
    .then(function(userChoice) {
        const sql = `INSERT INTO role (title, salary, department_id) VAULUES(?,?,?)`

        db.query(sql, [userChoice.title,userChoice.salary,userChoice.department_id], function(err, results){
            console.log("Role added to database.")
            menu()
        })
    })

}

function addEmployee() {
    return inquirer.prompt([
        {
            type: "input",
            name: "last_name",
            message: "Enter Last Name."
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter Role ID."
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter Manager ID."
        }

    ])
    .then(function(userChoice){
        const sql= `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        db.query(sql, [userChoice.first_name, userChoice.last_name, userChoice.role_id, userChoice.manager_id], function(err, results){
            console.log("Employee added to database.")
            menu()
        })
    })
}

function updateRole(){
    return inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID."
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter Updated Role ID."
        }
    ])
    .then(function(userChoice){
        const sql= `UPDATE employee SET role_id=? WHERE id=?`
        db.query(sql,[userChoice.role_id, userChoice.id], function(err, results){
            console.log("Role updated.")
        })
    })
}


menu()