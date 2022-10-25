const gameBoard = (() => {

    let _players = [];
    let _playerTurn = 0;

    const _boardComponent = document.querySelector(".gameboard");
    const _contentText = document.querySelector(".content-text");
    let _boardArray = [];

    const showBoard = () => {
        console.log(_boardArray);
    }

    /* const getPlayersAll = () => {
        return _players;
    } */

    /* const getPlayerByIndex = (index) => {
        return _players[index];
    } */

    const getCurrentPlayer = () => {
        return _players[_playerTurn];
    }

    const addPlayer = player => {
        _players.push(player);
    }

    const _setNextPlayerTurn = () => {
        if (_playerTurn >= _players.length-1) {
            _playerTurn = 0;
        } else {
            _playerTurn += 1;
        }
        _contentText.textContent = `${getCurrentPlayer().name}'s turn...`;
    }

    const setMark = (tile, mark) => {
        //use _boardArray, textContent and setAttribute
        tile.textContent = mark;
        tile.setAttribute("player-choice", mark);
        _setNextPlayerTurn();
        showBoard();
        _checkEndgame(tile);
    }

    const _checkEndgame = (tile) => {
        //check that row
        if (_isEndgameRow(tile)) {
            _executeEndgame();
            return;
        }

        //check that column
        if (_isEndgameColumn(tile)) {
            _executeEndgame();
            return;
        }

        //check diagonals
        if (_isEndgameDiagonal(tile)) {
            _executeEndgame();
            return;
        }
    }

    const _isEndgameRow = tile => {
        let rowCorrect = 0;
        _boardArray[tile.getAttribute('positionX')].forEach(rowTile => {
            if (rowTile.getAttribute("player-choice") == tile.getAttribute("player-choice")) {
                rowCorrect += 1;
            }
        });
        console.log(`rowCorrect = ${rowCorrect}`);
        if (rowCorrect >= 3) {
            return true;
        }
        return false;
    }

    const _isEndgameColumn = tile => {
        let columnCorrect = 0;
        let column = _boardArray.map(row => {
            return row[tile.getAttribute('positionY')];
        })
        column.forEach(columnTile => {
            if (columnTile.getAttribute('player-choice') == tile.getAttribute('player-choice')) {
                columnCorrect += 1;
            }
        });
        console.log(`columnCorrect = ${columnCorrect}`);
        if (columnCorrect >= 3) {
            return true;
        }
        return false;
    }

    const _isEndgameDiagonal = tile => {
        if (!_boardArray[1][1].getAttribute('player-choice')) return false;
        
        //slant down-rightward
        
        //slant up-rightward
    }

    const _executeEndgame = () => {
        console.log("game ended");
    }

    const reset = () => {
        _players = [];
        _playerTurn = 0;

        //renew board tiles
        _boardArray = [];
        _boardComponent.replaceChildren();
    }

    const init = () => {
        for (let i = 0; i < 3; i++){
            let boardRow = [];
            for (let j = 0; j < 3; j++){
                const boardTile = document.createElement("div");
                boardTile.classList.add("boardTile");
                boardTile.setAttribute('positionX', i);
                boardTile.setAttribute('positionY', j);
                boardTile.addEventListener('click', placeMark);
                _boardComponent.appendChild(boardTile);
                boardRow.push(boardTile);
            };
            _boardArray.push(boardRow);
        };

        _contentText.textContent = `Welcome to Tic Tac Toe! ${getCurrentPlayer().name} shall start...`;

    };
    
    return {
        reset,
        init,
        showBoard,
        //getPlayersAll,
        //getPlayerByIndex,
        getCurrentPlayer,
        addPlayer,
        setMark,
    };

})();

function placeMark(event) {
    //use data attribute to determine if chosen
    if (event.target.hasAttribute("player-choice")) return;

    const mark = gameBoard.getCurrentPlayer().sign;
    gameBoard.setMark(event.target, mark);
};

const player = (name, sign) => {
    return {name,
        sign,
    };
};

gameBoard.reset();
const player1 = player("player 1", "X");
const player2 = player("player 2", "O");
gameBoard.addPlayer(player1);
gameBoard.addPlayer(player2);
gameBoard.init();
