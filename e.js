const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];

// console.log(numbers.some(x => x > 3));
// console.log(people.some(x => x.name === 'A'));

Array.prototype.mySome = function(checkFn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (checkFn(element)) return true;
    }
    return false;
}

console.log(numbers.mySome(x => x > 3));
console.log(people.mySome(x => x.name === 'A'));
