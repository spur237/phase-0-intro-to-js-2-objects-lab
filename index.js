// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee, name, nameValue){
    let x = {...employee};
    x[name] = nameValue;
    return x;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    let x = {...employee};
    delete x[key];
    return x;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}