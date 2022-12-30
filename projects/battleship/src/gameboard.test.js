import gameboard/* , {boardSpace, createGridArray} */ from "./gameboard";

// jest.mock("./gameboard", () => {
//     return {
//         createGridArray: jest.fn(() => {
//             return ["mock board array here"];
//         }),
//     };
// });

describe("board creation", () => {
    let mockgameboard;

    beforeEach(() => {
        mockgameboard = gameboard(3,5);
    });

    // afterEach(() => {
    //     mockgameboard = gameboard(3,5);
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