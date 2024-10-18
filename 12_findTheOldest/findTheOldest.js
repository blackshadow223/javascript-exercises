const findTheOldest = function(array) {
    return array.sort((prevObj, nextObj) => {
        let prevEndYear = prevObj.yearOfDeath ? prevObj.yearOfDeath : (new Date()).getFullYear();
        let nextEndYear = nextObj.yearOfDeath ? nextObj.yearOfDeath : (new Date()).getFullYear();

        let prevAge = prevObj.yearOfBirth - prevEndYear;
        let nextAge = nextObj.yearOfBirth - nextEndYear;

        return prevAge - nextAge;
    }).at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
