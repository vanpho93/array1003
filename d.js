const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];

// console.log(numbers.map(x => x * x));
// console.log(people.map(person => person.age));

Array.prototype.myMap = function(transform) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        output.push(transform(element));
    }
    return output;
}

console.log(numbers.myMap(x => x * x));
console.log(people.myMap(person => person.age));