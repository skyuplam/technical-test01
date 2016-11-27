import React from 'react';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import LinkIcon from 'material-ui/svg-icons/content/link';
import {GridList, GridTile} from 'material-ui/GridList';
import {
  HomePage,
  introMsg,
  mapDispatchToProps,
} from '../index';
import {
  changeUsername,
} from '../actions';
import {
  loadRepos,
  sort,
  filter,
} from '../../App/actions';
import {
  FILTERING_OPTION_ODD_ID,
} from '../../App/constants';


describe('<HomePage />', () => {
  const renderedComponent = shallow(
    <HomePage />
  );
  it('should render the Home Page', () => {
    expect(renderedComponent.contains(
      <p>{introMsg}</p>
    )).toEqual(true);
  });
  it('should have 1 TextField', () => {
    expect(renderedComponent.find(TextField).length).toBe(1);
  });
  it('should have 1 RaisedButton when repos is empty', () => {
    expect(renderedComponent.find(RaisedButton).length).toBe(1);
  });
  it('should have an empty GridList', () => {
    expect(renderedComponent.find(GridList).length).toBe(1);
  });
  it('should have 4 RaisedButton when repos is not empty', () => {
    const repos = [{
      login: 'test 1',
      id: 1,
      html_url: 'https://github.com',
    }, {
      login: 'test 2',
      id: 2,
      html_url: 'https://github.com',
    }];
    const renderedHomePage = shallow(
      <HomePage
        repos={repos}
      />
    );
    expect(renderedHomePage.find(RaisedButton).length).toBe(4);
  });
});

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn((dispatch) => dispatch);
  const result = mapDispatchToProps(dispatch);

  it('should return an object with onChangeUsername to be injected', () => {
    expect(result.onChangeUsername).toBeDefined();
  });

  it('should dispatch changeUsername when onChangeUsername is called', () => {
    const username = 'tester';
    result.onChangeUsername({
      target: {
        value: username,
      },
    });
    expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
  });

  it('should return an object with onFetchRepos to be injected', () => {
    expect(result.onFetchRepos).toBeDefined();
  });

  it('should dispatch loadRepos when onFetchRepos is called', () => {
    result.onFetchRepos();
    expect(dispatch).toHaveBeenCalledWith(loadRepos());
  });

  it('should preventDefault if onFetchRepos is called with event', () => {
    const preventDefault = jest.fn();
    const evt = {
      preventDefault,
    };
    result.onFetchRepos(evt);
    expect(preventDefault).toHaveBeenCalledWith();
  });

  it('should return an object with onSort to be injected', () => {
    expect(result.onSort).toBeDefined();
  });

  it('should dispatch sort when onSort is called', () => {
    const login = 'login';
    result.onSort(login);
    expect(dispatch).toHaveBeenCalledWith(sort(login));
  });

  it('should preventDefault if onSort is called with event', () => {
    const preventDefault = jest.fn();
    const evt = {
      preventDefault,
    };
    result.onSort(evt);
    expect(preventDefault).toHaveBeenCalledWith();
  });

  it('should return an object with onFilter to be injected', () => {
    expect(result.onFilter).toBeDefined();
  });

  it('should dispatch filter when onFilter is called', () => {
    result.onFilter(FILTERING_OPTION_ODD_ID);
    expect(dispatch).toHaveBeenCalledWith(filter(FILTERING_OPTION_ODD_ID));
  });

  it('should preventDefault if onFilter is called with event', () => {
    const preventDefault = jest.fn();
    const evt = {
      preventDefault,
    };
    result.onFilter(evt);
    expect(preventDefault).toHaveBeenCalledWith();
  });

  it('should return an object with onDefault to be injected', () => {
    expect(result.onDefault).toBeDefined();
  });

  it('should dispatch sort and filter when onDefault is called', () => {
    result.onDefault();
    expect(dispatch).toHaveBeenCalledWith(
      sort('id'),
    );
    expect(dispatch).toHaveBeenCalledWith(
      filter(null),
    );
  });

  it('should preventDefault if onDefault is called with event', () => {
    const preventDefault = jest.fn();
    const evt = {
      preventDefault,
    };
    result.onDefault(evt);
    expect(preventDefault).toHaveBeenCalledWith();
  });
});
