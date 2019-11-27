

const numbers = [10,60,40,90,20,34];
console.log(Math.max(...numbers));

const arr1 = [1,2,3], arr2=[4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

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

const johnCopy = {...john}; // copy number boolean string by value
john.name ='jonathan';
john.emailids = [1,2,3];
console.log(johnCopy);
console.log(john);

