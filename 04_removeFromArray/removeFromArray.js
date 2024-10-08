const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; ++i) {
        let index = array.indexOf(args[i]);
        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(args[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
