import gameboard from "./gameboard";
import * as ship from "./ship.js";

ship.default = jest.fn(ship.default);

afterEach(() => {
    jest.clearAllMocks();
});

describe("board creation", () => {

    const mockgameboard = gameboard(3,5);

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

    test("gameboard getSpace returns boardspace", () => {
        expect(mockgameboard.getSpace(1,1)).toStrictEqual(
            { horizontal: 1,
                vertical: 1
        });
        expect(mockgameboard.getSpace(2,4)).toStrictEqual(
            { horizontal: 2,
                vertical: 4
        });
    });
});

describe.skip("ship creation", () => {
    const mockgameboard = gameboard(3,5);

    test("ship() is called", () => {
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

    test("ship is created along correct positions", () => {
        expect(mockgameboard.getSpace(2,1).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,2).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,3).ship).toBe(shiptest);
        expect(mockgameboard.getSpace(2,4).ship).toBe(shiptest);
    });

    test.skip("ship can only be in horizontal or vertical lines, otherwise throw error", () => {
        expect(() => mockgameboard.placeShip(3, [0,0], [1,2]))
        .toThrow("Ship must be laid in a straight line either horizontally or vertically.");
    });

    test.skip("ship length must be more than 1, otherwise throw error", () => {
        expect(() => mockgameboard.placeShip(-4, [0,0], [0,4]))
        .toThrow("Ship length must be more than 1.");
    });

    test.skip("ship length of 1 must have same startpoint and endpoint, otherwise throw error", () => {
        expect(() => mockgameboard.placeShip(1, [0,0], [0,1]))
        .toThrow("Ship of length 1 should have same head and tail positions.");
    });

    test.skip("ship cannot replace exsiting ship spaces", () => {
    });


});
