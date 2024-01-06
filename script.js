onReady();
function onReady(){
    console.log('Working');
}

let allEmployees = [];

//variables for creating objects
let firstName = document.getElementById("f-name");
let lastName = document.getElementById("l-name");
let empId = document.getElementById("emp-id");
let jobTitle = document.getElementById("job-title");
let annualSalary = document.getElementById("salary");

//function adds employee to table
function addEmployees(event){
    //prevent default behaivor
    event.preventDefault();
    //create an employee Object
    let employeeObject = { 
    Name:firstName.value + " " + lastName.value,
    empId: empId.value,
    annualSalary: annualSalary.value}
    
    // when submitting info add inofrmation to global variable array employees.
    allEmployees.push(employeeObject);

    let tableRow = document.getElementById("tableOfEmployees");

    tableRow.innerHTML +=`
    <tr class = "tableRow">
        <td>${firstName.value + " " + lastName.value}</td>
        <td>${empId.value}</td>
        <td>${jobTitle.value}</td>
        <td>${annualSalary.value}</td>
    </tr>
    ` 
    //clear input forms
    firstName.value = '';
    lastName.value = '';
    empId = '';
    jobTitle.value = '';
    annualSalary.value = '';

    console.log(allEmployees);
}// end function addEmployees