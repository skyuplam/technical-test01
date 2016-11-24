import appReducer, { initialState } from '../reducer';

describe('appReducer', () => {
  let state;

  beforeAll(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
});
