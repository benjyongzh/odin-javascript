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

test("calculator divides numbers (a/b)", () => {
    expect(practice.calculator.divide(15,3))
    .toEqual(5);

    expect(practice.calculator.divide(-59, 78.5))
    .toBeCloseTo(-0.7516);
});

test("calculator throws error if divide by zero", () => {
    expect(() => practice.calculator.divide(256, 0))
    .toThrow('Cannot divide by zero.');
});

test("calculator throws error if an input is not number", () => {
    expect(() => practice.calculator.add("15a", 31))
    .toThrow('Input is not a number.');

    expect(() => practice.calculator.subtract("1a55", 12))
    .toThrow('Input is not a number.');

    expect(() => practice.calculator.multiply("m4re", 8))
    .toThrow('Input is not a number.');

    expect(() => practice.calculator.divide(7,"a0sfdv8"))
    .toThrow('Input is not a number.');
 });

test("caesarCipher shifts characters by 1 by default", () => {
    expect(practice.caesarCipher("abc")).toStrictEqual("bcd");
});

test("caesarCipher accepts spaces", () => {
    expect(practice.caesarCipher("gh i")).toStrictEqual("hi j");
});

test("caesarCipher shifts characters according to shift input", () => {
    expect(practice.caesarCipher("klm", 4)).toStrictEqual("opq");
});

test("caesarCipher maintains casing", () => {
    expect(practice.caesarCipher("oPq")).toStrictEqual("pQr");
});

test("caesarCipher throws error if there is a NaN in the input string", () => {
    expect(() => practice.caesarCipher("ab1c")).toThrow("Alphabets only.");
});

test("caesarCipher throws error if shift is not an integer", () => {
    expect(() => practice.caesarCipher("def", 1.5)).toThrow("Must shift by an integer.");
    expect(() => practice.caesarCipher("def", "seven")).toThrow("Must shift by an integer.");
});