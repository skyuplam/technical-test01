import appReducer, { initialState } from '../reducer';
import {
  loadGists,
  gistsLoaded,
  gistsLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;

  beforeAll(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadGists action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'gists'], false);

    expect(appReducer(state, loadGists()))
      .toEqual(expectedResult);
  });

  it('should handle the gistsLoaded action correctly', () => {
    const fixture = [{
      name: 'my gist',
    }];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'gists'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, gistsLoaded(fixture, username)))
      .toEqual(expectedResult);
  });

  it('should handle the gistsLoadingError action correctly', () => {
    const fixture = [{
      msg: 'Not found',
    }];
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, gistsLoadingError(fixture)))
      .toEqual(expectedResult);
  });
});
