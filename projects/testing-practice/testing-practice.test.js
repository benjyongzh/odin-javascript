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

test("calculator adds numbers (a+b)", () => {
    expect(practice.calculator.add(3,6))
    .toEqual(9);

    expect(practice.calculator.add(62.6,124.51))
    .toBeCloseTo(187.11);
});

test("calculator subtracts numbers (a-b)", () => {
    expect(practice.calculator.subtract(12,2))
    .toEqual(10);

    expect(practice.calculator.subtract(45.6, 2.7))
    .toBeCloseTo(42.9);
});

test("calculator subtraction can go negative", () => {
    expect(practice.calculator.subtract(5,62))
    .toEqual(-57);

    expect(practice.calculator.subtract(15.3, 62.7))
    .toBeCloseTo(-47.4);
});

test("calculator multiples numbers (a*b)", () => {
    expect(practice.calculator.multiply(51,521))
    .toEqual(26571);

    expect(practice.calculator.multiply(51.56, 895.3))
    .toBeCloseTo(46161.668);
});

test("calculator multiply can go negative", () => {
    expect(practice.calculator.multiply(-3,14))
    .toEqual(-42);

    expect(practice.calculator.multiply(-4.2, 2.5))
    .toBeCloseTo(-10.5);
});

test("calculator multiply 2 negatives to become positive", () => {
    expect(practice.calculator.multiply(-21,-9))
    .toEqual(189);
});


test("calculator throws error if input is not number", () => {
    expect(() => practice.calculator.add("15a", 31))
    .toThrow('Input is not a number.');

    expect(() => practice.calculator.subtract("1a55", 12))
    .toThrow('Input is not a number.');

    expect(() => practice.calculator.multiply("m4re", 8))
    .toThrow('Input is not a number.');

//     expect(() => practice.calculator.divide(7,"a0sfdv8"))
//     .toThrow('Input is not a number.');
 });
