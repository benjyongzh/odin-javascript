const gameBoard = (() => {

    let _players = [];
    let _playerTurn = 0;
    let _gameIsOver = false;
    let _turnCount = 0;

    const _boardComponent = document.querySelector(".gameboard");
    const _contentText = document.querySelector(".content-text");
    const _replayButton = document.querySelector(".button-replay");
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
        _turnCount += 1;
        _checkOutOfTurns();
    }

    const _checkOutOfTurns = () => {
        if (_turnCount >= _boardArray.flat().length) {
            _executeStalemate();
        };
    };

    const setMark = (tile, mark) => {
        //use _boardArray, textContent and setAttribute
        tile.textContent = mark;
        tile.setAttribute("player-choice", mark);
        //showBoard();
        _checkEndgame(tile);
    }

    const _checkEndgame = (tile) => {
        //check that row
        if (_isEndgameRow(tile)) {
            _executeWinningEndgame();
            return;
        }

        //check that column
        if (_isEndgameColumn(tile)) {
            _executeWinningEndgame();
            return;
        }

        //check diagonals
        if (_isEndgameDiagonal(tile)) {
            _executeWinningEndgame();
            return;
        }

        _setNextPlayerTurn();
    }

    const _isEndgameRow = tile => {
        return _testSignAlongArray(_boardArray[tile.getAttribute('positionX')], tile, 'row');
    }

    const _isEndgameColumn = tile => {
        let column = _boardArray.map(row => {
            return row[tile.getAttribute('positionY')];
        })
        return _testSignAlongArray(column, tile, 'column');
    }

    const _isEndgameDiagonal = tile => {
        if (!_boardArray[1][1].getAttribute('player-choice')) return false;
        return _checkIsDownwardDiagonal(tile) ? true : _checkIsUpwardDiagonal(tile);
    }

    const _checkIsDownwardDiagonal = tile => {
        //slant down-rightward
        //create array of downward diagonal
        let downArray = _boardArray.flat();
        downArray = downArray.filter(element => {
            return element.getAttribute('positionY') == element.getAttribute('positionX');
        })

        //test along this diagonal
        return _testSignAlongArray(downArray, tile, 'downward diagonal');
    }

    const _checkIsUpwardDiagonal = tile => {
        //slant up-rightward
        //create array of upward diagonal
        let upArray = Array.from(_boardArray)
                            .reverse();
        for (let i = 0; i < upArray.length; i++){
            upArray[i] = upArray[i].filter(element => {
                return (i == upArray[i].indexOf(element));
            })[0];
            //console.log(upArray[i]);
        };
        //console.log(upArray);

        //test along this diagonal
        return _testSignAlongArray(upArray, tile, 'upward diagonal');
        //return _testSignAlongArray(finalArray, tile, 'upward diagonal');
    }
        
    const _testSignAlongArray = (array, tile, direction) => {
        let slantSignCorrect = 0;
        array.forEach(element => {
            if (element.getAttribute('player-choice') == tile.getAttribute('player-choice')) {
                slantSignCorrect += 1;
            };
        });
        console.log(`${direction}: slantSignCorrect = ${slantSignCorrect}`);
        if (slantSignCorrect >= 3) {
            _highlightWinningTiles(array);
            return true;
        }
        return false;
    }

    const _highlightWinningTiles = array => {
        array.forEach(tile => {
            tile.classList.add('winning-tile');
        })
    }

    const _executeWinningEndgame = () => {
        let gameOverText = `Game over. ${getCurrentPlayer().name} has won!`;
        console.log(gameOverText);
        _contentText.textContent = gameOverText;
        _gameIsOver = true;
        _replayButton.classList.add('game-is-over');
    }

    const _executeStalemate = () => {
        let gameOverText = `Game over. Stalemate.`;
        console.log(gameOverText);
        _contentText.textContent = gameOverText;
        _gameIsOver = true;
        _replayButton.classList.add('game-is-over');
    }

    const checkGameIsOver = () => _gameIsOver;

    const reset = () => {
        _players = [];
        _playerTurn = 0;
        _gameIsOver = false;
        _turnCount = 0;

        //renew board tiles
        _boardArray = [];
        _boardComponent.replaceChildren();
        _replayButton.classList.remove('game-is-over');
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

        _replayButton.addEventListener('click', pressReplay);

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
        checkGameIsOver,
    };

})();

function pressReplay(event) {
    gameBoard.reset();
    gameBoard.addPlayer(player1);
    gameBoard.addPlayer(player2);
    gameBoard.init();
}

function placeMark(event) {
    //use data attribute to determine if chosen
    if (event.target.hasAttribute("player-choice") || gameBoard.checkGameIsOver()) return;

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
