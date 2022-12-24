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
        if (isNaN(a) || isNaN(b)) throw 'Input is not a number.';

        return Number(a) + Number(b);
    },
    subtract: (a,b) => {
        if (isNaN(a) || isNaN(b)) throw 'Input is not a number.';

        return Number(a) - Number(b);
    },
    multiply: (a,b) => {
        if (isNaN(a) || isNaN(b)) throw 'Input is not a number.';

        return Number(a) * Number(b);
    },
    divide: (a,b) => {
        if (b===0) throw new Error('Cannot divide by zero.');

        if (isNaN(a) || isNaN(b)) throw 'Input is not a number.';

        return Number(a) / Number(b);
    },
};

function caesarCipher(string, shift = 1){
    let stringArray = string.split("");

    //check if all characters are valid
    for (let i = 0; i < stringArray.length; i++){
        // check for special characters
        if (isSymbol(stringArray[i])) continue;

        // check for valid alphabets
        if (!alphabets.includes(stringArray[i].toLowerCase())) throw new Error("Alphabets only.");
    };

    // check for NaN and non-integers
    if (isNaN(shift) || !Number.isInteger(shift)) throw new Error("Must shift by an integer.");

    let resultArray = stringArray.map(character => {
        // check for special characters
        if (isSymbol(character)) return character;

        let index = alphabets.indexOf(character.toLowerCase());

        // get shifted index, with wrapping
        if ((index + shift) >= alphabets.length) {
            index = (index+shift) - alphabets.length;
        } else {
            index += shift;
        };

        // maintain casing
        if (isLowerCase(character)){
            return alphabets[index];
        } else return alphabets[index].toUpperCase();
    });

    return resultArray.join("");
};

function isSymbol(char){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]/;
    return format.test(char);
};

function isLowerCase(string){
    return string === string.toLowerCase();
};

const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

module.exports = {
    capitalise,
    reverseString,
    calculator,
    caesarCipher
};