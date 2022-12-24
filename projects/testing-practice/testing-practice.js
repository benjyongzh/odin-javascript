function capitalise(string){
    let firstLetter = string[0].toUpperCase();
    let remaining = string.split("");
    remaining = remaining.slice(1).join("");
    return firstLetter + remaining;
};

function reverseString(string){
    return string.split("")
    .reverse()
    .join("");
    
};

const calculator = {
    add: (a,b) => {
        if (isNaN(a) || isNaN(b)) {
            throw 'One of the inputs is not a number.';
        };
        return Number(a) + Number(b);
    },
};

module.exports = {
    capitalise,
    reverseString,
    calculator
};