import ship from "./ship";

function boardSpace(horizontal, vertical){//need to identify if its a ship
    return {
        horizontal: horizontal,
        vertical: vertical,
    };
};

export function createGridArray(x,y){
    let array = [];
    for (let h = 0; h < x; h++){
        let column = [];
        for (let v = 0; v < y; v++){
            column.push(boardSpace(h,v));
        };
        array.push(column);
    };
    return array;
};

export default function gameboard(sizeX, sizeY){

    let _boardSize = [sizeX, sizeY];

    function createBoard(horizontal, vertical){
        return createGridArray(sizeX, sizeY);
    };

    function placeShip(length, startPoint, endPoint){
        const newShip = ship(length);
        //check if straight ship
        //check if spaces are existing ships
        return newShip;
    };

    function getSpace(x,y) {_boardArray[x][y]};

    let _boardArray = createBoard(sizeX, sizeY);

    return {
        get board(){return _boardArray},
        get boardSize(){return _boardSize},
        placeShip,
        getSpace,
    };
};

// module.exports = {boardSpace, createGridArray};

