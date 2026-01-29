// Contoh 1: Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// method dibagi via prototype supaya tidak dibuat ulang setiap instance
Person.prototype.halo = function () {
    return `Halo, selamat pagi ${this.name}`;
}

// membuat objek dari function Person, perlu new
const person1 = new Person("Munir", 29)
console.log(typeof person1);
console.log(person1.name);
console.log(person1.halo());

// Contoh 2 : Factory function (function yang mengembalikan objek)
function createPerson(race, religion) {
    return {
        race,
        religion,
        info() {
            return `Person with race ${this.race} and religion ${this.religion} `
        }
    }
}

const person2 = createPerson('jawa', 'moeslem');
console.log(typeof person2);
console.log(person2.race);
console.log(person2.info());
person2.employed = true;
console.log(person2.employed);

// Contoh 3 : 
// const Employee = function(){}
// anonimous function return (=>) 
const Employee = (grade, name) => {
    return {
        grade,
        name,
        detail() { return `name is ${this.name} and grade ${this.grade}` }
    }
}

const emp1 = Employee("A", "Ahmad");
console.log(emp1.grade);
console.log(emp1.detail());