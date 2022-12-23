const basics = require('./jest-basics.js');

test('adds 1 + 2 to equal 3', () => {
    expect(basics.sum(1,2)).toStrictEqual(3);
});


test('adds 6 + 4 to be truthy', () => {
    expect(basics.sum(6,4)).toBeTruthy();
});

test('adds 2 + 2 to not be undefined', () => {
    expect(basics.sum(2,2)).not.toBeUndefined();
});

test('adds 16 + 61 to be more than 50', () => {
    expect(basics.sum(16,61)).toBeGreaterThan(50);
});

test('adds 132 + 15 to be more than or equal 147', () => {
    expect(basics.sum(132,15)).toBeGreaterThanOrEqual(147);
});

test('adds 12.5 + 1.2 to be close to 13.7', () => {
    expect(basics.sum(12.5,1.2)).toBeCloseTo(13.7);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

test('the shopping list has milk on it', () => {
    expect(basics.shoppingList).toContain('milk');
    expect(new Set(basics.shoppingList)).toContain('milk');
  });

test('compiling android goes as expected', () => {
    expect(() => basics.compileAndroidCode()).toThrow();
    expect(() => basics.compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => basics.compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => basics.compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error mesage using a regexp like below
    expect(() => basics.compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => basics.compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});