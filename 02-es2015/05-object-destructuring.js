const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Hyd',
        pinCode: 500050
    },
    emailids: [
        'a@gmal', 'b@gmail'
    ]
};

const {name, age, address:{city:residence},emailids:[, secondEmailId]} = john;

console.log(name, age, residence, secondEmailId);