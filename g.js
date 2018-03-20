const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];

Array.prototype.myFind = function(checkFn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (checkFn(element)) return element;
    }
}

console.log(numbers.findIndex(x => x % 2 === 0));
console.log(people.findIndex(x => x.name === 'Tun'));

