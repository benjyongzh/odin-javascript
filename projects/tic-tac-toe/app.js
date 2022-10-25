const gameBoard = (() => {

    let _players = [];
    let _playerTurn = 0;

    const _boardComponent = document.querySelector(".gameboard");
    const _contentText = document.querySelector(".content-text");
    let _boardArray = [];
    
    const init = () => {
        _players = [];
        _playerTurn = 0;

        //renew board tiles
        _boardArray = [];
        _boardComponent.replaceChildren();
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
                //console.log(boardRow);
            };
            _boardArray.push(boardRow);
            //console.log(boardArray)
        };

    };

    const showBoard = () => {
        console.log(_boardArray);
    }

    /* const getPlayerTurn = () => {
        return _playerTurn;
    } */

    const _setNextPlayerTurn = () => {
        if (_playerTurn >= _players.length-1) {
            _playerTurn = 0;
        } else {
            _playerTurn += 1;
        }
        _contentText.textContent = `${_players[_playerTurn].name}'s turn...`;
    }

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

    const setMark = (tile, mark) => {
        //use _boardArray, textContent and setAttribute
        tile.textContent = mark;
        tile.setAttribute("player-choice", mark);
        _setNextPlayerTurn();
        showBoard();
    }
    
    
    return {
        init,
        showBoard,
        // getPlayerTurn,
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

function placeMark(event) {
    const mark = gameBoard.getCurrentPlayer().sign;
    
    //use data attribute to determine if chosen
    if (event.target.hasAttribute("player-choice")) return;
    
    gameBoard.setMark(event.target, mark);
};

const player = (name, sign) => {
    return {name,
        sign,
    };
};

gameBoard.init();
const player1 = player("player 1", "X");
const player2 = player("player 2", "O");
gameBoard.addPlayer(player1);
gameBoard.addPlayer(player2);

