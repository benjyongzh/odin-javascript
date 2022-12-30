import ship from "./ship.js";

afterEach(() => {
    jest.clearAllMocks();
});

describe("ship creation", () => {

    test("ship() gets called with 3 as default", () => {
        const shiptest = jest.fn(ship());
        expect(shiptest.length).toStrictEqual(3);
    });
    
    test("ship() gets called with length from arg", () => {
        const shiptest = jest.fn(ship(4));
        expect(shiptest.length).toStrictEqual(4);
    });
    
});
