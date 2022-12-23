import * as practice from "./testing-practice.js";

test("first letter gets capitalised", () => {
    expect(practice.capitalise("mario"))
    .toBe("Mario");

    expect(practice.capitalise("r-2d2"))
    .toBe("R-2d2");
});


test("reverses a string", () => {
    expect(practice.reverseString("luigi"))
    .toBe("igiul");

    expect(practice.reverseString("racecar"))
    .toBe("racecar");

    expect(practice.reverseString("C-3PO"))
    .toBe("OP3-C");
});