const sumAll = function(firstNum, secondNum) {
    let smallNum = firstNum; 
    let bigNum = secondNum; 
    let solution = 0;

    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }

    // If the arguments are passed in non-ascending order, it must be accounted for
    if (firstNum > secondNum) {
        smallNum = secondNum; 
        bigNum  = firstNum; 
    }

    for (let i = smallNum; i <= bigNum; i++) {
        solution += i; 
    }

    return solution;
};

// Do not edit below this line
module.exports = sumAll;
