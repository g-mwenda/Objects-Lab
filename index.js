// Write your solution in this file!
const employee = {
    name : 'Sam',
    streetAddress: '11 Broadway'
}



function updateEmployeeWithKeyAndValue(employee, key, value){ 

    //create a new employee with the spread operator
    const updatedEmployee = { ...employee};

    //update the value of the specified key
    updatedEmployee[key] = value;
    //return the updated employee object

    return updatedEmployee;

}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "");

updatedEmployee[streetAddress] = '';

console.log('updatedEmployee');
console.log('employee');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//update the employee object with the new ke-value pair
employee[key] = value;

//return the updated employee object
return employee;

}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')


function deleteFromEmployeeByKey(employee, key){
// create a clone of the employee object
const newEmployee = {...employee};

//delete the specified key from the clone

delete newEmployee[key];

return newEmployee;

}
const newEmployee = deleteFromEmployeeByKey(employee, '')



function destructivelyDeleteFromEmployeeByKey(employee, key){
// remove the specified key from the original employee object
delete employee[key];

//return the updated employee object
return employee;

}

console.log(employee);

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')

console.log(employee);
