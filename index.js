const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connect")
const mysql = require('mysql2');


function menu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "How would you like to proceed?",
            choices: 
            ["View departments",
            "View roles", 
            "View employees",
            "Add department",
            "Add role",
            "Add employee",
            "Update roles",
            "Leave"]
        }
    ])

    .then(function(userChoice){
        if (userChoice.title==="View departments"){
            viewDept()
        }
        if (userChoice.title==="View roles"){
            viewRoles()
        }
        if (userChoice.title==="View employees"){
           viewEmployees()
        }
        if (userChoice.title==="Add department"){
            addDepartment()
        }
        if (userChoice.title==="Add role"){
            addRole()
        }
        if (userChoice.title==="Add employee"){
            addEmployee()
        }
        if (userChoice.title==="Update roles"){
            updateRole()
        }
        if (userChoice.title==="Leave"){
            console.log("Bye")
            return;
        }
    });
}

function viewDept(){
    const sql = `SELECT * FROM department`

    db.query(sql, function(err, results){
        console.table(results)
        menu()
    })
    
}

function viewRoles() {
    const sql = `SELECT * FROM role`
    console.log("viewroles")
    db.query(sql, function(err, results){
        if (err) {
            console.log(err)
        }
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


function addDepartment() {
    console.log("adddept")
    inquirer.prompt([
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
    console.log("addrole")
    inquirer.prompt([
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
        const sql = `INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`

        db.query(sql, [userChoice.title,userChoice.salary,userChoice.department_id], function(err, results){
            if (err) {
                console.log(err)
            }
            console.log("Role added to database.")
            menu()
        })
    })

}

function addEmployee() {
    console.log("addemployee")
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter first Name."
        },
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
            if (err) {
                console.log(err)
            }
            console.log("Employee added to database.")
            menu()
        })
    })
}

function updateRole(){
    console.log("update role")
    return inquirer.prompt([
        {
            type: "input",
            name: "employee",
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
            menu()
        })
    })
}


menu()