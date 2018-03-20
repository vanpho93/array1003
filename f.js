const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];

// console.log(numbers.every(x => x > 1));
// console.log(people.every(x => x.age > 9));

Array.prototype.myEvery = function(checkFn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (!checkFn(element)) return false;
    }
    return true;
}

console.log(numbers.myEvery(x => x > 1));
console.log(people.myEvery(x => x.age > 9));
