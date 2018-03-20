const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];
// console.log(people.filter(person => person.age > 11));
// const output = numbers.filter(num => num % 2 === 1);
// console.log(output);

Array.prototype.myFilter = function(checkFn) {
    const ouput = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (checkFn(element)) ouput.push(element);
    }
    return ouput;
}

console.log(numbers.myFilter(num => num % 2 === 0));
