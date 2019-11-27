
const name = 'John';

const john = {
    name,
    age:32,
    celebratedBirthday() {
        this.age++;
    }
};
console.log(john.celebratedBirthday);