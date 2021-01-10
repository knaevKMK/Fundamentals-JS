class Person{
    firstName;
    lastname;
    age;


    constructor(firstName, lastname, age) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

}
function main(firstname,lastName, age) {
    const person = new Person(firstname, lastName, age);
    console.log(person.firstName);
    console.log(person.lastname);
    console.log(person.age);
}

main('Ivan', 'Vazov', 54);