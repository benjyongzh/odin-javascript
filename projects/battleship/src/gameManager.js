const gameManager = (() => {
    let privateString = "test 1 string";
    let counter = 0;

    return {
        getString: () => {
            counter++;
            privateString += " lmao";
            return privateString;
        },
        counter
    };
})();

module.exports = gameManager;