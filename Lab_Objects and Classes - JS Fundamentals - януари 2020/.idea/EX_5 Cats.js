function solve(array) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let elemnt of array) {
        let [name, age] = elemnt.split(' ');
        cats.push(new Cat(name, age))
    }
    cats.forEach(cat => cat.meow());
}
solve(['Mellow 2', 'Tom 5']);