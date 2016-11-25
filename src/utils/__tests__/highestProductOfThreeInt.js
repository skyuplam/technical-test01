import { highestProductOfThreeInt } from '../highestProductOfThreeInt';

describe('highestProductOfThreeInt()', () => {
  let result;

  beforeEach(() => {
    result = false;
  })

  it('should throw if inputIntegers is `null`', () => {
    try {
      highestProductOfThreeInt(null);
    } catch (err) {
      result = err.name === 'Invariant Violation';
    }
    expect(result).toEqual(true);
  });

  it('should throw if inputIntegers is an empty array', () => {
    try {
      highestProductOfThreeInt([]);
    } catch (err) {
      result = err.name === 'Invariant Violation';
    }
    expect(result).toEqual(true);
  });

  it('should throw if inputIntegers is an array of length less than 3', () => {
    try {
      highestProductOfThreeInt([1, 2]);
    } catch (err) {
      result = err.name === 'Invariant Violation';
    }
    expect(result).toEqual(true);
  });

  it('should return the result directly when the length of array is 3', () => {
    const input = [5, 8, 3];
    const expectedResult = input[0] * input[1] * input[2];
    expect(highestProductOfThreeInt(input)).toEqual(expectedResult);
  });

  it('should return product of maximum 3 when all input is positive', () => {
    const input = [1, 10, 2, 6, 5, 3];
    const expectedResult = 300;
    expect(highestProductOfThreeInt(input)).toEqual(expectedResult);
  });

  it('should return product of maximum 3 when the input is all negative', () => {
    const input = [-10, -2, -6, -5, -3];
    const expectedResult = -30;
    expect(highestProductOfThreeInt(input)).toEqual(expectedResult);
  });

  it('should return 0 for given 4 integers including at least one 0', () => {
    const input = [-10, 0, 6, 3];
    const expectedResult = 0;
    expect(highestProductOfThreeInt(input) === expectedResult).toEqual(true);
  });

  it('should return the product of minimum#2, minimum#1 and maximum#1', () => {
    const input = [-10, -20, 0, 6, 3];
    const expectedResult = 1200;
    expect(highestProductOfThreeInt(input)).toEqual(expectedResult);
  });

  it('should return maximum 3', () => {
    const input = [-10, -2, 0, 6, 10, 8];
    const expectedResult = 480;
    expect(highestProductOfThreeInt(input)).toEqual(expectedResult);
  });
});
