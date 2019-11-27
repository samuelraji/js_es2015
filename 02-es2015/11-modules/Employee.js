import Person from './Person.js';
export default class Employee extends Person {
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