const reverseString = function(string) {
    let solution = ""; 
    for (let i = string.length - 1; i >= 0; i--) {
        solution += string.at(i); 
    }

    return solution;
};

// Do not edit below this line
module.exports = reverseString;
