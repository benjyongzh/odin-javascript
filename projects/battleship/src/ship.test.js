import ship from "./ship.js";

// afterEach(() => {
//     jest.clearAllMocks();
// });

describe("ship creation", () => {

    test("ship() gets called with 3 as default", () => {
        const shiptest = ship();
        expect(shiptest.length).toStrictEqual(3);
    });
    
    test("ship() gets called with length from arg", () => {
        const shiptest = ship(4);
        expect(shiptest.length).toStrictEqual(4);
    });

});

describe("ship hits", () => {
    test("ship has zero hitstaken by default", () => {
        const shiptest = ship(5);
        expect(shiptest.hitsTaken).toStrictEqual(0);
    });
    
    test("ship takes hit", () => {
        const shiptest = ship(5);
        shiptest.hit();
        expect(shiptest.hitsTaken).toStrictEqual(1);
        expect(shiptest.isSunk).toStrictEqual(false);
    });

    test("ship is sunk", () => {
        const shiptest = ship(2);
        shiptest.hit();
        shiptest.hit();
        expect(shiptest.isSunk).toStrictEqual(true);
    });
    
});
