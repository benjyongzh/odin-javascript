import gameboard from "./gameboard";
// import { createGridArray } from "./gameboard";

import * as ship from "./ship.js";


afterEach(() => {
    jest.clearAllMocks();
});

describe.skip("board creation", () => {

    // const spy1 = jest.spyOn(gameboardModule, 'createGridArray');


    const mockgameboard = gameboard(3,5);
    // test("createGridArray is called", () => {
    //     expect(spy1).toHaveBeenCalled();
    // });

    test("gameboard size", () => {
        expect(mockgameboard.boardSize).toStrictEqual([3,5]);
    });

    test("gameboard create nested array", () => {
        expect(mockgameboard.board.length).toStrictEqual(3);
        expect(mockgameboard.board[2].length).toStrictEqual(5);
        expect(mockgameboard.board[1][1]).toStrictEqual(
            { horizontal: 1,
                vertical: 1
        });
        expect(mockgameboard.board[2][4]).toStrictEqual(
            { horizontal: 2,
                vertical: 4
        });
    });
});

describe("ship creation", () => {
    const mockgameboard = gameboard(3,5);

    test.only("ship() is called", () => {

        // jest.mock('./ship.js', () => jest.fn());
        // service.yourFunction = jest.fn(() => {"mock ship"})

        ship.default = jest.fn().mockReturnValue("mock ship");

        const shiptest = mockgameboard.placeShip(7, [2,1], [2,4]);
        expect(shiptest).toStrictEqual("mock ship");
        expect(ship.default).toHaveBeenCalled();
        expect(ship.default.mock.calls[0][0]).toBe(7);
    });

    test("ship is created with correct length", () => {
        expect(shiptest.length).toStrictEqual(4);
    });

    test("ship is created along correct positions", () => {
        expect(mockgameboard.getSpace(2,1).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,2).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,3).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,4).ship).toBe(shiptest);
    });

    test("ship can only be in horizontal or vertical lines, otherwise throw error", () => {
        const diagonalShip = mockgameboard.placeShip(3, [0,0], [1,2]);
        expect().toThrow();
    });

    test("ship cannot replace exsiting ship spaces", () => {
        const overlapShip = mockgameboard.placeShip(3, [0,2], [2,2]);
        expect().toThrow();
    });
});
