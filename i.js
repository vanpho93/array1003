const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3, 10];

// console.log(numbers.sort((a, b) => a - b));
// console.log(people.sort((p1, p2) => p1.age - p2.age));
// console.log(numbers.reduce((a, b) => a + b));
// console.log(numbers.reduce((a, b) => a * b));
console.log(people.map(p => p.age).reduce((a, b) => a + b));
