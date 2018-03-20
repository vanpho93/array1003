const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

// console.log(people);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.sayHello = function() {
    console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi.');
}

const teo = new Person('TEo NgueYen', 10);
const ti = new Person('Ti NgueYen', 12);
teo.sayHello();
ti.sayHello();
console.log(teo);
