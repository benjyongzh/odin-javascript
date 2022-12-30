// import ship from "./ship";

export default function gameboard(sizeX, sizeY){

    let _boardSize = [sizeX, sizeY];

    const createBoard = (horizontal, vertical) => {
        return createGridArray(sizeX, sizeY);
    };

    const placeShip = (length, startPoint, endPoint) => {

    };

    let _boardArray = createBoard(sizeX, sizeY);

    return {
        get board(){return _boardArray},
        get boardSize(){return _boardSize},
        placeShip,
    };
};

function boardSpace(horizontal, vertical){
    return {
        horizontal: horizontal,
        vertical: vertical
    };
};

function createGridArray(x,y){
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

// module.exports = {boardSpace, createGridArray};

