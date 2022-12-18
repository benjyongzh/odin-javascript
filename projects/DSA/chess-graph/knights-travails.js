
// create chess board using X and Y cartesian coordinates
const createBoard = (horizontal,vertical) => {
    let board = [];
    for ( let i = 0; i < horizontal; i++){
        let row = [];
        for (let j = 0; j < vertical; j++){
            row.push([i,j]);
        };
        board.push(row);
    };
    return board;
};

const chessBoard = createBoard(8,8);

console.log(chessBoard);

// for each board space, create a list of other spaces are valid from that space, for a knight to traverse to. (adjacenccy list)

// function to check for valid move from 1 space to another