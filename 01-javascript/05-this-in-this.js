const john = {
    name:'john',
    age:32,
    celebrateBday() {
        this.age++;
    }

}

john.celebrateBday();
console.log( john );

const cb = john.celebrateBday;
console.log(cb === john.celebrateBday);

cb();