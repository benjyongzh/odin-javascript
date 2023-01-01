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

const mockgameboard = gameboard(4,6);

describe("ship creation", () => {

    test("ship() is called", () => {
        ship.default.mockReturnValueOnce("mock ship");

        const shiptest = mockgameboard.placeShip([2,1], [2,4]);
        expect(shiptest).toStrictEqual("mock ship");
        expect(ship.default).toHaveBeenCalled();
        expect(ship.default.mock.calls[0][0]).toBe(4);
    });

    test("ship is created along correct positions", () => {
        const shiptest = mockgameboard.placeShip([0,1], [0,5]);
        expect(mockgameboard.getSpace(0,1).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,2).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,3).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,4).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,5).ship).toStrictEqual(shiptest);
    });

    test("ship can only be in horizontal or vertical lines, otherwise throw error", () => {
        expect(() => mockgameboard.placeShip([0,0], [1,2]))
        .toThrow("Ship must be laid in a straight line either horizontally or vertically.");
    });

    test("ship cannot replace existing ship spaces. Will throw error", () => {
        expect(() => mockgameboard.placeShip([0,1], [0,3]))
        .toThrow("Space is occupied");
    });


});
