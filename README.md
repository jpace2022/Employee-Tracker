<h1 align="center"> 12 SQL: Employee Tracker </h1>  

## License

**MIT** ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Content
- [Project Discription](#discription)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Mock Up](#mockup)
- [Deployed URL](#deployedurl)
- [GitHub](#github)
- [Contact](#contact)

## Discription

- Given a command-line application that accepts user input when I start the application. 
- Then I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- When I choose to view all departments then I am presented with a formatted table showing department names and department ids
- When I choose to view all role then I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- When I choose to view all employees then I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- When I choose to add a department then I am prompted to enter the name of the department and that department is added to the database
- When I choose to add a role then I am prompted to enter the name, salary, and department for the role and that role is added to the database
- When I choose to add an employee then I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- When I choose to update an employee role then I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation
    [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).
    [console.table package](https://www.npmjs.com/package/console.table)
    [MySQL2 package](https://www.npmjs.com/package/mysql2)
    

## Usage


## Contribution
    James Pace

## Test
   N/A
## Mock Up
The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

The following images show the web application's appearance and functionality:

As the image illustrates, your schema should contain the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.


## GitHub Repo
   [Employee tracker (https://github.com/jpace2022/Employee-Tracker.git)] 

## Contact
    For any questions or concerns, contact me at my email: pacej2022@gmail.com
    

## Video Link