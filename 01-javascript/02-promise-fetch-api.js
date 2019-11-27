// fetch returns a promise object
const fetch = require('node-fetch');
fetch(`http://awesome-store-server.herokuapp.com/products`)
    .then(function(response){
        // console.log(response.body);
        if (response.status >= 400) {
            throw new Error('Server returned error when fetching the data');
        }
        /* for (let abc in response) {
            console.log(abc);
        } */
        return response.json();
        /* response.json().then(function(data) {
            console.log(data);
        }); */
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error.message);
    });