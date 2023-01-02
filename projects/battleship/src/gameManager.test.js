import game from "./gameManager.js";
import * as player from "./player";

player.default = jest.fn(player.default);

afterEach(() => {
    jest.clearAllMocks();
});

describe.only("create player into game", () => {
    test("player() is called upon player creation", () => {
        // player.default.mockReturnValueOnce({mockName: "I am a mock player."});
        game.createPlayer(5,6,true);
        expect(player.default).toHaveBeenCalled();
    });

    test("getPlayerByIndex works", () => {
        const firstPlayer = game.getPlayerByIndex(0);
        expect(firstPlayer.isComputer).toBe(true);

    });

    test("createPlayer uses arguments to create player with certain properties", () => {
        const firstPlayer = game.getPlayerByIndex(0);
        expect(firstPlayer.isComputer).toBe(true);
        expect(firstPlayer.board.boardSize).toStrictEqual([5,6]);
    });

    test("createPlayer() is called with default values", () => {
        // player.default.mockReturnValueOnce({mockName: "I am a mock player."});
        const secondPlayer = game.createPlayer();
        expect(secondPlayer.isComputer).toBe(false);
        expect(secondPlayer.board.boardSize).toStrictEqual([8,8]);
    });

});


test("gameManager changes turns", () => {

});

test("gameManager gameover", () => {
    
});
