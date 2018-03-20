const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 13, height: 150 },
    { name: 'Tun', age: 12, height: 90 },
];

const numbers = [1, 4, 2, 3];

// numbers.forEach(x => console.log(x));

Array.prototype.myForEach = function(fn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        fn(element);
    }
}
people.forEach((person, index) => {
    // console.log('Xin chao, toi la ' + person.name + ', ' + person.age + ' tuoi.');
    console.log(`${index + 1} Xin chao, toi la ${person.name}, ${person.age} tuoi.`);
});
