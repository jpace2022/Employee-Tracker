INSERT INTO department (name)

VALUES 
        ("Managment"),
        ("IT Department"),
        ("Accounting"),
        ("Administration"),
        ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES
        ("Project Manager", 80000, 1),
        ("Senior Engineer", 100000, 2),
        ("Engineer", 50000, 2),
        ("Accountant", 90000, 3),
        ("Admin Assistant", 73500, 4),
        ("Recruiter", 78300, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES

        ("Ichigo", "Kurosaki", 2, NULL),
        ("Orihime", "Inoue", 1, 1),
        ("Rukia", "Kuchiki", 4, NULL),
        ("Renji", "Abarai", 4, NULL),
        ("Kenpachi", "Zaraki", 4, NULL);