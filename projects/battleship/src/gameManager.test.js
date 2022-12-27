import game from "./gameManager.js";

// jest.mock("./gameManager.js");//still not working

test("gameManager is a singleton", () => {
    expect(game.getString()).toStrictEqual("test 1 string lmao");
});

test("gameManager counter is moving", () => {
    expect(game.getCounter()).toBe(1);
    game.getString();
    expect(game.getCounter()).toBe(2);
});