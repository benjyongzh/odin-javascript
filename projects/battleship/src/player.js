import gameboard from "./gameboard";
import game from "./gameManager";

export default function player(boardSizeX = 8, boardSizeY = 8, isComputer = false){

    let _isComputer = isComputer;
    let _targetGameboard;

    function aimAtGameboard(board){
        _targetGameboard = board;
    };

    function attack(coordinates){
        //fire receiveAttack on target gameboard
        _targetGameboard.receiveAttack(coordinates[0], coordinates[1]);
        game.nextPlayer();
    };

    function randomAttack(){
        //select opponent
        const enemyPlayer = getRandomPlayer({excludeCurrentPlayer: true});

        //select opponent's gameboard
        aimAtGameboard(enemyPlayer.board);

        //select a random point 
        let pointX = getRandomInt(0,_targetGameboard.boardSize[0]);
        let pointY = getRandomInt(0,_targetGameboard.boardSize[1]);

        //make sure that random point is not recorded in its shotsTaken array
        while (_targetGameboard.shotsTaken.includes([pointX, pointY])){
            pointX = getRandomInt(0,_targetGameboard.boardSize[0]);
            pointY = getRandomInt(0,_targetGameboard.boardSize[1]);
        };

        attack([pointX, pointY]);
    };

    let _board = gameboard(boardSizeX, boardSizeY);

    return {
        get board(){return _board},
        get isComputer(){return _isComputer},
        set isComputer(bool){_isComputer = bool},
        aimAtGameboard,
        attack,
        randomAttack,
    }
};

function getRandomPlayer(option = {excludeCurrentPlayer: true}){
    let playerCount = game.players.length;
    let randomIndex = getRandomInt(0,playerCount-1);
    
    if (option.excludeCurrentPlayer == true){
        while(randomIndex !== game.players.indexOf(game.currentPlayer)){
            randomIndex = getRandomInt(0,playerCount-1);
        };
    };
    return game.players[randomIndex];
}

function getRandomInt(min,max){
    let difference = max - min;
    return min + (Math.floor(Math.random()*difference+1));
}