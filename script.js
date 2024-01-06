onReady();
function onReady(){
    console.log('Working');
}
//holds all employee objects data information.
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
   
    //if statement if form left empty
    if(firstName.value === ''){
        alert('Please insert First Name');
        return;
    }else if(lastName.value === ''){
        alert('Please insert Last Name');
        return;
    } else if(empId.value === ''){
        alert('Please insert an Employee ID number');
        return;
    } else if(jobTitle.value === ''){
        alert('Please insert Job Title');
        return;
    } else if(annualSalary.value === ''){
        alert('Please insert Annual Salary');
        return;
    }

    //outline for employee object
    let employeeObject = { 
    Name:firstName.value + " " + lastName.value,
    empId: empId.value,
    annualSalary: annualSalary.value}
    
    // when submitting info add inofrmation to global variable array employees.
    allEmployees.push(employeeObject);

     //variable for document object table
    let tableRow = document.getElementById("tableOfEmployees");

     //inserts new table information from form data. 
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
    empId.value = '';
    jobTitle.value = '';
    annualSalary.value = '';

    console.log(allEmployees);
}// end function addEmployees