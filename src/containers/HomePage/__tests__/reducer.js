import homeReducer, { initialState } from '../reducer';
import {
  changeUsername,
} from '../actions';

describe('Home Reducer', () => {
  let state;

  beforeAll(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const username = 'skyuplam';
    const expectedResult = state
      .set('username', username);

    expect(homeReducer(state, changeUsername(username))).toEqual(expectedResult);
  });
});
