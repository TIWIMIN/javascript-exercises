const removeFromArray = function(array) {
    removeList = new Set();
    solution = [];
    for (let i = 1; i < arguments.length; i++) {
        removeList.add(arguments[i]); 
    }

    for (const element of array) {
        if (!removeList.has(element)) {
            solution.push(element); 
        }

    }

    return solution;
};

// Do not edit below this line
module.exports = removeFromArray;
