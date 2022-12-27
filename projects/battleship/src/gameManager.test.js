// const gameManager = require("./gameManager.js");
import {gameManager} from "./gameManager.js";

test("gameManager is a singleton", () => {
    expect(gameManager.getString()).toBe("test 1 string lmao");
});

test("gameManager counter is moving", () => {
    expect(gameManager.counter).toBe(0);
    expect(gameManager.counter).toBe(0);
});