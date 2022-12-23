function capitalise(string){
    let firstLetter = string[0].toUpperCase();
    let remaining = string.split("");
    remaining = remaining.slice(1).join("");
    return firstLetter + remaining;
};

module.exports = {
    capitalise
};