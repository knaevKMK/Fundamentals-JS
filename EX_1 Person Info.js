 class Person {
    firstName ;
    lastName;
    age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
}

function personInfo(firstName, lastName, age) {
    let person = new Person(firstName, lastName, age);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
personInfo('Ivan', 'Vazov', 54);