import add from '../../src/stringCalculator';

describe('String Calculator', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself if one number is provided', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

});
