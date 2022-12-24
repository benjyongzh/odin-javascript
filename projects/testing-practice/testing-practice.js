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
    console.log(stringArray);
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === " ") continue;
        if (!alphabets.includes(stringArray[i]) || !alphabets.includes(stringArray[i].toLowerCase())) throw new Error("Alphabets only.");
    };

    if (isNaN(shift) || !Number.isInteger(shift)) throw new Error("Must shift by an integer.");

    let resultArray = stringArray.map(character => {
        if (character === " ") return " ";
        let index = alphabets.indexOf(character.toLowerCase());
        index += shift;

        return alphabets[index]; //need to check casing

    });
    return resultArray.join("");
};

const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

module.exports = {
    capitalise,
    reverseString,
    calculator,
    caesarCipher
};