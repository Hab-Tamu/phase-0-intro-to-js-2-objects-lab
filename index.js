// Write your solution in this file!
/*=============================================*/
const employee = {
    ["name"] : "",
    ["street"]: ""
}
console.log(employee)

function beforeEach() {
    for (const key in employee) {
        delete employee[key];
      }
    employee.name = 'Sam';
}

beforeEach()
console.log(employee)
//==============================================//
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key] : value }
}
let newEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", '11 Broadway')
console.log(newEmployee)
//=========destructivelyUpdateEmployeeWithKeyAndValue=====================================//

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
console.log(newEmployee)


//============== deleteFromEmployeeByKey ==================================================//
function deleteFromEmployeeByKey(employee, key){
    let deleteName = {...employee}
    delete deleteName.name
    return deleteName
}

//============== deleteFromEmployeeByKey ==================================================//
newEmployee = deleteFromEmployeeByKey(employee, 'name')
console.log("delete")
console.log(newEmployee.name)
console.log(typeof(newEmployee))

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name 
    return employee
}

//============== destructivelyDeleteFromEmployeeByKey ==================================================//
newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name")
console.log("delete")
console.log(employee.name)