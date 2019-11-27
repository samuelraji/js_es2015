class Movie {
    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast(cast) {
        this.cast.push(cast);
    }

    addToCollection(amountToAdd) {
        this.boxOfficeCollection+=amountToAdd;
    }
}

const bahubhali = new Movie('Bhahubhali', ['abc','def','ghi'], 2018, 123000000);
bahubhali.addToCast('jkl');
const titanic = new Movie('Titanic', ['john', 'edwards', 'decaprio'], 1998, 8942000000);
titanic.addToCollection(4567);
console.log(bahubhali);
console.log(titanic);
