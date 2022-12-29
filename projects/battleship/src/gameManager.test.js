import {game, gameManager} from "./gameManager.js";


afterEach(() => {
    jest.resetAllMocks();
});

test("gameManager is a singleton", () => {
    const game1 = new gameManager();
    const game2 = new gameManager();
    const game3 = new gameManager();
    expect(game1 == game).toBe(true);
    expect(game2 == game).toBe(true);
    expect(game3 == game).toBe(true);
});

test("gameManager counter is moving", () => {
    jest.mock("./gameManager.js");

    expect(game.getCounter()).toBe(1);
    game.getString();
    expect(game.getCounter()).toBe(2);
});

