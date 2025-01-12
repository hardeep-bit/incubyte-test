import add from '../../src/stringCalculator';

describe('String Calculator', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself if one number is provided', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,5")).toBe(8);
  });

  test('should handle an unknown amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
  });

});
