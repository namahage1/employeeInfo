// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// const employeeArray = [{
//   firstName:"",lastName:"",salary:0
// }]

const employees = [];
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let firstName = "";
  let lastName = "";
  let salary = 0;

  let addEmployees = true;
  while(addEmployees){
    firstName = prompt("Enter employee's first name", "");
    lastName = prompt("Enter employee's last name", "");
    salary = prompt("Enter the salary");

    const employeeArray = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    };
 
  employees.push(employeeArray);
  addEmployees = confirm("Add more?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //make variable
  let average = 0;
  let total = 0;
  //for loop -go through array of salary till length of array
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    total = total + currentEmployee.salary;
  }
  average = total / employeesArray.length;

  console.log("The average employee salary between our " + `${employeesArray.length}` + "employee(s) is " + `${average}`); 
  return average;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
let randomNum = Math.floor(Math.random() * employeesArray.length);
console.log("Congratulations to " + `${employeesArray[randomNum].firstName}` + " "+ `${employeesArray[randomNum].lastName}` + ", our random drawing winner!"); 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
