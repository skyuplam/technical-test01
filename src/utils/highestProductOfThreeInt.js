import { isEmpty, isArray, max, isUndefined } from 'lodash';
import invariant from 'invariant';

/**
/* Given a list of integers, returns the highest product between 3 of those numbers
/*
/* Assumption: the type of the input array element is only integer
/*
/* @param {Array} inputIntegers
/* @returns {number}
*/
export function highestProductOfThreeInt(inputIntegers) {
  invariant(
    !isEmpty(inputIntegers) &&
    isArray(inputIntegers) &&
    !(inputIntegers.length < 3)
    , 'Incorrect input, `inputIntegers` must be an array of length equal to or greater than 3'
  );

  const lenthOfInput = inputIntegers.length;

  // return the result when the length is equal to 3
  if (lenthOfInput === 3) {
    return inputIntegers[0] * inputIntegers[1] * inputIntegers[2];
  }

  // The highest product of 3 in an array will be the max between (min1 * min2 * max1) and (max1 * max2 * max3)
  // Initialization
  let min1, min2, max1, max2, max3;

  // Traverse given array
  inputIntegers.forEach((i, index) => {
    // Update max top 3
    if (isUndefined(max1) || i > max1) {
      max3 = max2;
      max2 = max1;
      max1 = i;
    } else if (isUndefined(max2) || i > max2) {
      max3 = max2;
      max2 = i;
    } else if (isUndefined(max3) || i > max3) {
      max3 = i;
    }

    // Update min top 2
    if (isUndefined(min1) || i < min1) {
      min2 = min1;
      min1 = i;
    } else if (isUndefined(min2) || i < min2) {
      min2 = i;
    }
  });

  return max([min1 * min2 * max1, max1 * max2 * max3]);
}
