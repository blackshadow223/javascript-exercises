const repeatString = function(string, num=1) {
    if (num === 0) return "";
    if (num < 0) return "ERROR";
    if (string === "") return "";
    const temp_str = string;
    for (let i = 1; i < num; ++i) {
        string += temp_str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
