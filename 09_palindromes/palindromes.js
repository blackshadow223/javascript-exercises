const palindromes = function (string) {
    const PUNCTUATION = ['!', ',', '.'];

    const regularString = string
        .split('')
        .reduce((value, next) => {
            if (next === ' ' || PUNCTUATION.includes(next))
                return value;
            return value + next;
        }, '')
        .toLowerCase();

    const reverseString = regularString.split('').reverse().join('');
    return regularString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
