import { fromJS } from 'immutable';
import {
  selectHome,
  selectUsername,
} from '../selectors';

describe('Home Selectors', () => {
  describe('selectHome', () => {
    const homeSelector = selectHome();
    it('should select home state', () => {
      const homeState = fromJS({});
      const mockedState = fromJS({
        home: homeState,
      });

      expect(homeSelector(mockedState)).toEqual(homeState);
    });
  });

  describe('selectUsername', () => {
    const usernameSelector = selectUsername();

    it('should select username', () => {
      const username = 'skyuplam';
      const mockedState = fromJS({
        home: {
          username,
        },
      });

      expect(usernameSelector(mockedState)).toEqual(username);
    });
  });
});
