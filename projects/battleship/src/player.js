import gameboard from "./gameboard";
import game from "./gameManager";

export default function player(boardSizeX = 7, boardSizeY = 7, isComputer = false){

    let _isComputer = isComputer;

    function attack(coordinates){

    };

    function randomAttack(){

    };

    let _board = gameboard(boardSizeX, boardSizeY);

    return {
        get board(){return _board},
        get isComputer(){return _isComputer},
        set isComputer(bool){_isComputer = bool},
        attack,
        randomAttack,
    }
};