const findTheOldest = function(people) {
    const oldest = people.sort((personA, personB) => {
        if (personA.yearOfDeath === undefined) {
            personA.yearOfDeath = (new Date()).getFullYear();
        }
        if (personB.yearOfDeath === undefined) {
            personB.yearOfDeath = (new Date()).getFullYear();
        }

        ageA = personA.yearOfDeath - personA.yearOfBirth;
        ageB = personB.yearOfDeath - personB.yearOfBirth;
        return ((ageA > ageB) ? -1 : 1);
    })[0]

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
