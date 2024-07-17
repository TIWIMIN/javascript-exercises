const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	const sol = a.reduce((total, element) => {
    return total + element;
  }, 0)
  return sol;
};

const multiply = function(a) {
  const sol = a.reduce((product, element) => {
    return product * element; 
  }, 1)
  return sol; 
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  sol = 1; 
	for (let i = 1; i <= a; i++) {
    sol *= i;
  }
  return sol;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
