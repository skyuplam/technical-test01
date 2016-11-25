import { fromJS } from 'immutable';
import { isArray } from 'lodash';

import {
  LOAD_GISTS,
  LOAD_GISTS_SUCCESS,
  LOAD_GISTS_ERROR,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    gists: false,
    repos: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GISTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'gists'], false);
    case LOAD_GISTS_SUCCESS:
      return state
        .setIn(['userData', 'gists'], action.gists)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_GISTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repos'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repos'], isArray(action.repos) ? action.repos : [action.repos])
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
