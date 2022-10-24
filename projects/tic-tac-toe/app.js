const gameBoard = (() => {

    let _board = [];
    let _players = [];
    let _playerTurn = 0;
    
    const init = () => {
        _board = [[null, null, null],
                [null, null, null],
                [null, null, null]
                ];

        _players = [];
        _playerTurn = 0;
    };

    const showBoard = () => {
        console.log(_board);
    }

    /* const getPlayerTurn = () => {
        return _playerTurn;
    }

    const setPlayerTurn = (turn) => {
        _playerTurn = turn;
    } */

    const getPlayersAll = () => {
        return _players;
    }

    const getPlayerByIndex = (index) => {
        return _players[index];
    }

    const getCurrentPlayer = () => {
        return _players[_playerTurn];
    }

    const addPlayer = player => {
        _players.push(player);
    }

    const setMark = (positionX, positionY, mark) => {
        _board[positionX][positionY] = mark;
        if (_playerTurn >= _players.length-1) {
            _playerTurn = 0;
        } else {
            _playerTurn += 1;
        }
        showBoard();
    }
    
    
    return {
        init,
        showBoard,
        // getPlayerTurn,
        // setPlayerTurn,
        getPlayersAll,
        getPlayerByIndex,
        getCurrentPlayer,
        addPlayer,
        setMark,
    };

})();

const displayController = (() => {
    
    const render = () => {
        gameBoard.showBoard();
    }

    
    return {
        render,
    };

})();

function placeMark(positionX, positionY) {
    const mark = this.sign;
    gameBoard.setMark(positionX, positionY, mark);
};

const player = (name, sign) => {
    return {name,
        sign,
        placeMark: placeMark
    };
};

gameBoard.init();
const player1 = player("player 1", "X");
const player2 = player("player 2", "O");
gameBoard.addPlayer(player1);
gameBoard.addPlayer(player2);

