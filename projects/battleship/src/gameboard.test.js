import gameboard from "./gameboard";
import * as ship from "./ship.js";

ship.default = jest.fn(ship.default);

afterEach(() => {
    jest.clearAllMocks();
});

describe.skip("board creation", () => {

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

    test("ship() is called", () => {
        // jest.mock('./ship.js', () => jest.fn());
        ship.default.mockReturnValueOnce("mock ship");

        const shiptest = mockgameboard.placeShip(7, [2,1], [2,4]);
        expect(shiptest).toStrictEqual("mock ship");
        expect(ship.default).toHaveBeenCalled();
        expect(ship.default.mock.calls[0][0]).toBe(7);
    });

    test("ship is created with correct length", () => {
        const shiptest = mockgameboard.placeShip(4, [2,1], [2,4]);
        expect(shiptest.length).toStrictEqual(4);
    });

    test("ship can only be in horizontal or vertical lines, otherwise throw error", () => {
        expect(() => mockgameboard.placeShip(3, [0,0], [1,2]))
        .toThrow("Ship must be laid in a straight line either horizontally or vertically.");
    });

    test.skip("ship cannot replace exsiting ship spaces", () => {
    });

    test.skip("ship is created along correct positions", () => {
        expect(mockgameboard.getSpace(2,1).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,2).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,3).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,4).ship).toBe(shiptest);
    });

});
