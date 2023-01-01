import ship from "./ship";

function boardSpace(horizontal, vertical){//need to identify if its a ship
    return {
        horizontal: horizontal,
        vertical: vertical,
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

function exceptionHandler(error){
    throw error;
};

export default function gameboard(sizeX, sizeY){

    let _boardSize = [sizeX, sizeY];

    function createBoard(horizontal, vertical){
        return createGridArray(sizeX, sizeY);
    };

    function placeShip(startPoint, endPoint){
        //check if straight ship
        if (startPoint[0] !== endPoint[0] && startPoint[1] !== endPoint[1]){
            exceptionHandler("Ship must be laid in a straight line either horizontally or vertically.");
        };

        /* //check for ship length
        if (length <= 0){
            exceptionHandler("Ship length must be more than 1.");
        };

        //check for shiplength of 1
        if (length == 1){
            if (startPoint != endPoint){
                exceptionHandler("Ship of length 1 should have same head and tail positions.");
            };
        }; */

        const reservedSpaces = [];
        let shipDirection = "";
        let startVariable;
        let endVariable;

        //check ship direction
        if (startPoint[0] === endPoint[0]){
            //vertical ship
            startVariable = startPoint[1];
            endVariable = endPoint[1];
            shipDirection = "vertical";
        } else {
            //horizontal ship
            startVariable = startPoint[0];
            endVariable = endPoint[0];
            shipDirection = "horizontal";
        };

        let counter = startVariable;
        let length = 1;
        do {
            //get boardSpace
            let space;
            if (shipDirection === "vertical"){
                space = this.getSpace(startPoint[0],counter);
            } else {
                space = this.getSpace(counter,startPoint[1]);
            }

            //check if spaces are existing ships
            if (!space.hasOwnProperty('ship')) {
                reservedSpaces.push(space);
            } else {
                exceptionHandler("Space is occupied");
            };

            //update counter
            startVariable < endVariable ? counter++ : counter--

            //check length
            length++;

        } while (counter != endVariable);

        //define .ship in the boardspaces
        const newShip = ship(length);
        reservedSpaces.forEach(space => {space.ship = newShip});
        return newShip;
    };

    function getSpace(x,y) {return _boardArray[x][y]};

    let _boardArray = createBoard(sizeX, sizeY);

    return {
        get board(){return _boardArray},
        get boardSize(){return _boardSize},
        placeShip,
        getSpace,
    };
};