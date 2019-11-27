
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

const [first, second, ...others] = days;

console.log(first, second, others);

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

const {name, emailids, ...otherDetails} = john;

console.log(name, emailids, otherDetails);

function sum (a, b, ...rest) {
    console.log(a,b,rest);
}

sum (1,2,3,4,5,6);