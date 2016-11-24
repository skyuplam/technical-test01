import {
  LOAD_GISTS,
  LOAD_GISTS_SUCCESS,
  LOAD_GISTS_ERROR,
} from '../constants';

import {
  loadGists,
  gistsLoaded,
  gistsLoadingError,
} from '../actions';


describe('App Actions', () => {
  describe('loadGists', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_GISTS,
      };

      expect(loadGists()).toEqual(expectedResult);
    });
  });

  describe('gistsLoaded', () => {
    it('should return the correct type and the passed gists', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_GISTS_SUCCESS,
        gists: fixture,
        username,
      };

      expect(gistsLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('gistsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_GISTS_ERROR,
        error: fixture,
      };

      expect(gistsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
})
