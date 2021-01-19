function solve(array) {
    let employees = [];

    for (let i = 0; i < array.length; i++) {

        let employee = {
            fullname: array[i],
            pn: array[i].length
        }
        employees.push(employee);

    }
    employees
    .forEach(employee => console.log(`Name: ${employee['fullname']} -- Personal Number: ${employee['pn']}`));

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);