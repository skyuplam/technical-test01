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
  join,
  filter,
} from 'lodash';

import request from '../../utils/request';
import {
  LOAD_GISTS,
  LOAD_REPOS,
} from '../App/constants';
import {
  gistsLoaded,
  gistsLoadingError,
  reposLoaded,
  reposLoadingError,
} from '../App/actions';
import {
  selectUsername,
} from './selectors';

const githubAPIBaseURL = 'https://api.github.com';

export function* getGists() {
  const username = yield select(selectUsername());
  const requestURL = join(filter([githubAPIBaseURL, 'users', username, 'gists'], (o) => o), '/');

  try {
    const gists = yield call(request, requestURL);
    yield put(gistsLoaded(gists, username));
  } catch (err) {
    yield put(gistsLoadingError(err));
  }
}

export function* getRepos() {
  const username = yield select(selectUsername());
  const requestURL = join(filter([githubAPIBaseURL, 'users', username], (o) => o), '/');

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(reposLoadingError(err));
  }
}

export function* getGistsWatcher() {
  yield fork(takeLatest, LOAD_GISTS, getGists);
}

export function* getReposWatcher() {
  yield fork(takeLatest, LOAD_REPOS, getRepos);
}

export function* githubData() {
  // Fork watcher so we can continue execution
  const gistsWatcher = yield fork(getGistsWatcher);
  const reposWatcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(gistsWatcher);
  yield cancel(reposWatcher);
}

export default [
  githubData,
]
