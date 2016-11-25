import {
  LOAD_GISTS,
  LOAD_GISTS_SUCCESS,
  LOAD_GISTS_ERROR,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  SORTING,
  FILTERING,
} from '../constants';

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

  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPOS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type, repos, and username', () => {
      const fixture = [{ test: "test" }];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('reposLoadingError', () => {
    it('should return the correct type and error', () => {
      const error = 'error';
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error,
      };

      expect(reposLoadingError(error)).toEqual(expectedResult);
    });
  });

  describe('sort', () => {
    it('should return the correct type and criterion', () => {
      const criterion = 'test';
      const expectedResult = {
        type: SORTING,
        criterion,
      };

      expect(sort(criterion)).toEqual(expectedResult);
    });
  });

  describe('filter', () => {
    it('should return the correct type and criterion', () => {
      const criterion = 'test';
      const expectedResult = {
        type: FILTERING,
        criterion,
      };

      expect(filter(criterion)).toEqual(expectedResult);
    });
  });
})
