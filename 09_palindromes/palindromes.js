const palindromes = function (drome) {
    let dromeShrink = [...drome].map((char) => {
        return char.toLowerCase();
    })

    dromeShrink = dromeShrink.filter((char) => {
        return !(char === ' ') ; 
    })

    dromeReversed = dromeShrink.toReversed(); 
    dromeShrink = dromeShrink.toString().replace(/[^A-Za-z0-9]/g, '');
    dromeReversed = dromeReversed.toString().replace(/[^A-Za-z0-9]/g, '');

    console.log(dromeShrink + "normal");
    console.log(dromeReversed + "reversed");
    return (dromeShrink === dromeReversed);
};

// Do not edit below this line
module.exports = palindromes;
