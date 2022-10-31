const inquirer = require("inquirer");
const cTabble = require("console.table");
const db = require("./db/connect");

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
    return.inquirer.prompt([
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



menu()