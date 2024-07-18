const fibonacci = function(index) {
    if (index === 0 || index === "0") {
        return 0;
    }

    if (index < 0) {
        return "OOPS";
    }

    let [first, second] = [0, 1]; 
    for (let i = 0; i < (index - 1); i++) {
        let temp = first; 
        first = second; 
        second = temp + first; 
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
