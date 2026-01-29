// rekomendasi di js modern adalah dengan class
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Tidak ada Overloading

    greeting(){
        return `Halo, saya ${this.name}`
    }
}

const user1 = new User("Budi", 27);
const user2 = new User("Ani", 25);

console.log(typeof user1, typeof user2)

console.log(user1.name)
console.log(user1.greeting())

class Employee extends User{
    constructor(id, name, age){
        super(name, age);
        this.id = id;
    }
}

const user3 = new Employee(1928371, "Yandhi", 23)
console.log(user3.name) 