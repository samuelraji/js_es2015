class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
    constructor(name, age, role, dept) {
        super(name, age);
        this.role = role;
        this.dept = dept;
    }
    promote() {
        this.role = `Senior ${this.role}`;
    }
    celebrateBirthday() {
        super.celebrateBirthday();
        console.log('Happy Birthday!');
    }
}

const john = new Employee('John', 32, 'Developer', 'IT');

john.celebrateBirthday();
john.promote();
console.log(john);