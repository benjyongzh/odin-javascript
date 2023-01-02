import game from "./gameManager.js";
import * as player from "./player";

afterEach(() => {
    jest.clearAllMocks();
});

describe.only("create player into game", () => {
    test("player() are called upon player creation", () => {
        player.default = jest.fn();
        game.createPlayer = jest.fn().mockImplementation(() => {const newPlayer = player.default(5,7,true)});
        game.createPlayer();
        expect(player.default).toHaveBeenCalled();
    });

    test("nextPlayer() are called upon 1st player creation", () => {
        game.setPlayerByIndex = jest.fn();
        game.createPlayer = jest.fn().mockImplementation(() => {
            const array = [];
            array.push({string: "this is a player"});
            if (array.length === 1) game.setPlayerByIndex;
        });
        expect(game.setPlayerByIndex).toHaveBeenCalled();
    });

    test.skip("nextPlayer() is not called after 1st player is added", () => {
        const spyNextPlayer = jest.spyOn(game, 'nextPlayer');
        game.createPlayer();
        expect(spyNextPlayer).not.toHaveBeenCalled();
    });

});


test("gameManager changes turns", () => {

});

test("gameManager gameover", () => {
    
});
