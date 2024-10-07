const reverseString = function(string) {
    // Create an empty string variable to store the reversed string
    let temp_str = "";

    // Go through each character of the string and append them in the starting position of the temp_str variable
    for (let i = 0; i < string.length; ++i) {
        temp_str = string[i] + temp_str;
    }
    
    // The result is the reversed version of the original string
    return temp_str;
};

// Do not edit below this line
module.exports = reverseString;
