const fibonacci = function (number) {
    number = parseInt(number);

    if (number === 0) return 0;
    if (number < 0) return "OOPS";

    let prevNumber = 0;
    let nextNumber = 1;
    
    for (let i = 1; i < number; ++i) {
        let temp = nextNumber;
        nextNumber = prevNumber + nextNumber;
        prevNumber = temp;
    }
    
    return nextNumber;
};

// Do not edit below this line
module.exports = fibonacci;
