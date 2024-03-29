// create two students
var studentOne = {
    firstName: 'Nick',
    lastName: 'Och',
    age: 20,
    location: 'New York'
};
var studentTwo = {
    firstName: 'Steve',
    lastName: 'Omo',
    age: 22,
    location: 'Los Angeles'
};
// create an array named studentsList
var studentsList = [studentOne, studentTwo];
// Render table using Vanilla JavaScript
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "black";
table.appendChild(tbody);
// append a new row to the table
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
