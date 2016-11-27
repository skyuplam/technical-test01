import { takeLatest } from 'redux-saga';
import {
  select,
  call,
  put,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  composedURL,
} from '../../utils/url';
import request from '../../utils/request';
import {
  LOAD_REPOS,
} from '../App/constants';
import {
  reposLoaded,
  reposLoadingError,
} from '../App/actions';
import {
  selectUsername,
} from './selectors';

export const githubAPIBaseURL = 'https://api.github.com';

export function* getRepos() {
  const username = yield select(selectUsername());
  const requestURL = composedURL([githubAPIBaseURL, 'users', username]);

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(reposLoadingError(err));
  }
}

export function* getReposWatcher() {
  yield fork(takeLatest, LOAD_REPOS, getRepos);
}

export function* githubData() {
  // Fork watcher so we can continue execution
  const reposWatcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(reposWatcher);
}

export default [
  githubData,
]
