import player from "./player.js";

/* class gameManager{
    constructor(){
        // if (!!gameManager.instance) {
        //     return gameManager.instance;
        // }
        // gameManager.instance = this;
        // return this;

        this.players = [];
        this.currentPlayer;
    };

    createPlayer = (boardSizeX = 8, boardSizeY = 8, isComputer = false) => {
        const newPlayer = player(boardSizeX, boardSizeY, isComputer);
        this.players.push(newPlayer);
        if (this.players.length === 1) this.nextPlayer();
    };

    nextPlayer = () => {
        if (this.currentPlayer == undefined || this.players.length === 1){
            this.currentPlayer = this.players[0];
            return;
        };

        let currentIndex = this.players.indexOf(this.currentPlayer);
        currentIndex++;
        this.currentPlayer = this.players[currentIndex];
    };

    gameOver = loserPlayerboard => {
        console.log(`${loserPlayerboard} has lost.`);
    };
}; */

let game = (() => {
    let players = [];
    let currentPlayer;

    const createPlayer = (boardSizeX = 8, boardSizeY = 8, isComputer = false) => {
        const newPlayer = player(boardSizeX, boardSizeY, isComputer);
        players.push(newPlayer);
        if (players.length < 2) setPlayerByIndex(0);
        return newPlayer;
    };

    const setPlayerByIndex = index => {
        currentPlayer = players[index]};

    const nextPlayer = () => {
        let currentIndex = players.indexOf(currentPlayer);
        currentIndex++;
        if (currentIndex >= players.length) currentIndex = 0;
        setPlayerByIndex(currentIndex);
    };

    const getPlayerByIndex = index => {
        return players[index];
    };

    const gameOver = loserPlayerboard => {
        console.log(`${loserPlayerboard} has lost.`);
    };


    return {
        createPlayer,
        nextPlayer,
        gameOver,
        getPlayerByIndex
    };

})();

// const game = new gameManager();
// Object.freeze(game);

export default game;// only export game. never the gameManager class
