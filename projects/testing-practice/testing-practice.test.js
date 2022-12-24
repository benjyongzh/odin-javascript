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

test("calculator adds numbers", () => {
    expect(practice.calculator.add(3,6))
    .toEqual(9);

    expect(practice.calculator.add(62.6,124.51))
    .toBeCloseTo(187.11);
});

test("calculator throws error if input is not number", () => {
    expect(() => practice.calculator.add("15a", 31))
    .toThrow('One of the inputs is not a number.');
});
