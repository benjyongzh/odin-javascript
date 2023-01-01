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
        return this;

        this.players = [];
        this.currentPlayer;
    };

    nextPlayer(){
        let currentIndex = this.players.indexOf(this.currentPlayer);
        currentIndex++;
        this.currentPlayer = this.players[currentIndex];
    };

    gameOver(loserPlayerboard){
        
    };


};

const game = new gameManager();

export default game;
