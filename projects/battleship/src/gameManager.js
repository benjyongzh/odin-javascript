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
        console.log(`${loserPlayerboard} has lost.`);
    };


};

const game = new gameManager();

export default game;
