import appReducer, { initialState } from '../reducer';
import {
  loadGists,
  gistsLoaded,
  gistsLoadingError,
  loadRepos,
  reposLoaded,
  reposLoadingError,
  sort,
  filter,
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

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repos'], false);
    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = ['test'];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repos'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(expectedResult);
  });

  it('should handle the reposLoadingError action correctly', () => {
    const error = 'error';
    const expectedResult = state
      .set('error', error)
      .set('loading', false);

    expect(appReducer(state, reposLoadingError(error))).toEqual(expectedResult);
  });

  it('should handle the sort action correctly', () => {
    const criterion = 'criteria';
    const expectedResult = state
      .set('sorting', criterion);

    expect(appReducer(state, sort(criterion))).toEqual(expectedResult);
  });

  it('should handle the filter action correctly', () => {
    const criterion = 'criteria';
    const expectedResult = state
      .set('filtering', criterion);

    expect(appReducer(state, filter(criterion))).toEqual(expectedResult);
  });
});
