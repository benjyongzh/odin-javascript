/* export default gameManager = (() => {
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
})(); */

class gameManager{
    constructor(){
        if (!!gameManager.instance) {
            return gameManager.instance;
        }
        gameManager.instance = this;
        this.counter = 0;
        this.privateString = "test 1 string";
        return this;
    };
    getString() {
        this.counter++;
        this.privateString += " lmao";
        return this.privateString;
    };
    getCounter() {
        return this.counter;
    };
};

const game = new gameManager();

module.exports = {game, gameManager};
