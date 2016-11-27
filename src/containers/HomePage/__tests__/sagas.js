import {
  call,
  put,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import {
  githubAPIBaseURL,
  getRepos,
  getReposWatcher,
  githubData
} from '../sagas';
import {
  selectUsername,
} from '../selectors';
import {
  LOAD_REPOS,
} from '../../App/constants';
import {
  reposLoaded,
  reposLoadingError,
} from '../../App/actions';
import request from '../../../utils/request';

// const resource = 'https://api.github.com';


describe('getRepos Saga', () => {
  const username = '';
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    // expect(selectDescriptor).toEqual(select(selectUsername()));

    const requestURL = `https://api.github.com/users`;
    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
  });

  it('should call the reposLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(reposLoadingError(response)));
  });
});

describe('getReposWatcher saga', () => {
  const generator = getReposWatcher();

  it('should watch for LOAD_REPOS action', () => {
    const takeDescriptor = generator.next().value;

    expect(takeDescriptor).toEqual(fork(takeLatest, LOAD_REPOS, getRepos))
  });
});

describe('githubData saga', () => {
  const generator = githubData();
  let forkDescriptor;

  it('should asyncronously fork getReposWatcher saga', () => {
    forkDescriptor = generator.next().value;
    expect(forkDescriptor).toEqual(fork(getReposWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = generator.next().value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });
});
