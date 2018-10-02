let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(students) {
    for (var i = 0; i < students.length; i++) {
        console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort)
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printEmployees(users) {
     console.log("EMPLOYEES")
     for (var i = 0; i < users.employees.length; i++) {
         var str = i + 1
         str += " - " + users.employees[i].last_name.toUpperCase() + ", " + users.employees[i].first_name.toUpperCase()
         console.log(str)
     }
     console.log("MANAGERS")
     for (var i = 0; i < users.managers.length; i++) {
        var str = i + 1
        str += " - " + users.managers[i].last_name.toUpperCase() + ", " + users.managers[i].first_name.toUpperCase()
        console.log(str)
    }
 }