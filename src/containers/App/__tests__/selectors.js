import { fromJS } from 'immutable';
import {
  selectGlobal,
  selectLocationState,
  selectSorting,
  selectFiltering,
  selectRepos,
} from '../selectors';
import {
  FILTERING_OPTION_ODD_ID,
  FILTERING_OPTION_EVEN_ID,
} from '../constants'


describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});

describe('selectSorting', () => {
  const selector = selectSorting();
  it('should select the sorting state', () => {
    const sorting = fromJS({});
    const mockedState = fromJS({
      global: {
        sorting,
      },
    });
    expect(selector(mockedState)).toEqual(sorting);
  });
});

describe('selectFiltering', () => {
  const selector = selectFiltering();
  it('should select the filtering state', () => {
    const filtering = fromJS({});
    const mockedState = fromJS({
      global: {
        filtering,
      },
    });
    expect(selector(mockedState)).toEqual(filtering);
  });
});

describe('selectRepos', () => {
  const selector = selectRepos();
  let repos;
  let filtering;
  it('should select the repos state', () => {
    repos = [];
    const mockedState = fromJS({
      global: {
        userData: {
          repos
        },
        filtering,
      },
    });
    expect(selector(mockedState)).toEqual(repos);
  });

  it('should select the repos state with odd ID', () => {
    repos = [{
      id: 1,
      name: 'test 1',
    }, {
      id: 2,
      name: 'test 2',
    }];
    const mockedState = fromJS({
      global: {
        userData: {
          repos
        },
        filtering: FILTERING_OPTION_ODD_ID,
        sorting: 'id',
      },
    });
    const expected = [{
      id: 1,
      name: 'test 1',
    }];
    expect(selector(mockedState)).toEqual(expected);
  });

  it('should select the repos state with even ID', () => {
    repos = [{
      id: 1,
      name: 'test 1',
    }, {
      id: 2,
      name: 'test 2',
    }];
    const mockedState = fromJS({
      global: {
        userData: {
          repos
        },
        filtering: FILTERING_OPTION_EVEN_ID,
        sorting: 'id',
      },
    });
    const expected = [{
      id: 2,
      name: 'test 2',
    }];
    expect(selector(mockedState)).toEqual(expected);
  });

  it('should select the repos state without filtering', () => {
    repos = [{
      id: 1,
      name: 'test 1',
    }, {
      id: 2,
      name: 'test 2',
    }];
    const mockedState = fromJS({
      global: {
        userData: {
          repos
        },
        filtering: 'OMG',
        sorting: 'id',
      },
    });
    const expected = repos;
    expect(selector(mockedState)).toEqual(expected);
  });
});
