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

describe("ship creation", () => {

    test("ship() is called", () => {
        const mockgameboard = gameboard(4,6);
        ship.default.mockReturnValueOnce("mock ship");

        const shiptest = mockgameboard.placeShip([2,1], [2,4]);
        expect(shiptest).toStrictEqual("mock ship");
        expect(ship.default).toHaveBeenCalled();
        expect(ship.default.mock.calls[0][0]).toBe(4);
    });

    test("ship is created along correct positions", () => {
        const mockgameboard = gameboard(4,6);
        const shiptest = mockgameboard.placeShip([0,1], [0,5]);
        expect(mockgameboard.getSpace(0,1).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,2).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,3).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,4).ship).toStrictEqual(shiptest);
        expect(mockgameboard.getSpace(0,5).ship).toStrictEqual(shiptest);
    });

    test("ship can only be in horizontal or vertical lines, otherwise throw error", () => {
        const mockgameboard = gameboard(4,6);
        expect(() => mockgameboard.placeShip([0,0], [1,2]))
        .toThrow("Ship must be laid in a straight line either horizontally or vertically.");
    });

    test("ship cannot replace existing ship spaces. Will throw error", () => {
        const mockgameboard = gameboard(4,6);
        mockgameboard.placeShip([0,1], [0,5]);
        expect(() => mockgameboard.placeShip([0,1], [0,3]))
        .toThrow("Space is occupied");
    });
});

describe("board receiveAttack", () => {

    test("Shot coordinate is recorded into shotsTaken array.", () => {
        const mockgameboard = gameboard(5,5);
        mockgameboard.placeShip([3,3], [3,4]);
        mockgameboard.receiveAttack(3,1);
        mockgameboard.receiveAttack(2,4);
        expect(mockgameboard.shotsTaken.length).toStrictEqual(2);
    });

    test("Can hit ship", () => {
        const mockgameboard = gameboard(5,5);
        mockgameboard.placeShip([3,3], [3,4]);
        expect(mockgameboard.receiveAttack(3,4)).toBe(true);
    });

    test("target ship registers hit function", () => {

        const mockgameboard = gameboard(5,5);
        mockgameboard.placeShip([3,3], [3,4]);
        const targetShip = mockgameboard.getSpace(3,4).ship;
        const spyhit = jest.spyOn(targetShip, 'hit');
        mockgameboard.receiveAttack(3,4);
        expect(spyhit).toHaveBeenCalled();
        expect(targetShip.hitsTaken).toStrictEqual(1);
    });

    test("Can miss", () => {
        const mockgameboard = gameboard(5,5);
        mockgameboard.placeShip([3,3], [3,4]);
        expect(mockgameboard.receiveAttack(2,4)).toBe(false);
    });

    test("Missed shot is recorded in shotsMissed array.", () => {
        const mockgameboard = gameboard(5,5);
        mockgameboard.placeShip([3,3], [3,4]);
        mockgameboard.receiveAttack(3,1);
        mockgameboard.receiveAttack(2,4);
        expect(mockgameboard.shotsMissed.length).toStrictEqual(2);
    });
});