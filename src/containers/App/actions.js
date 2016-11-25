/**
/* App Actions
/*
 */

import {
  LOAD_GISTS,
  LOAD_GISTS_SUCCESS,
  LOAD_GISTS_ERROR,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';


/**
 * Load the gists, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GISTS
 */
export function loadGists() {
  return {
    type: LOAD_GISTS,
  };
}

/**
 * Dispatched when the gists are loaded by the request saga
 *
 * @param  {array} gists The repository data
 * @param  {string} username The current username
 *
 * @return {object} An action object with a type of LOAD_GISTS_SUCCESS passing the gists
 */
export function gistsLoaded(gists, username) {
  return {
    type: LOAD_GISTS_SUCCESS,
    gists,
    username,
  };
}

/**
 * Dispatched when loading the gists fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_GISTS_ERROR passing the error
 */
export function gistsLoadingError(error) {
  return {
    type: LOAD_GISTS_ERROR,
    error,
  };
}


/**
 * Load the repos, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repos are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object} An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repos fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function reposLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
