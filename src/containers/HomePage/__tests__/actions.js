import {
  CHANGE_USERNAME,
} from '../constants';

import {
  changeUsername
} from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and passed username', () => {
      const username = 'skyuplam';
      const expectedResult = {
        type: CHANGE_USERNAME,
        username,
      };

      expect(changeUsername(username)).toEqual(expectedResult);
    });
  });
});
