import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { greenA200 } from 'material-ui/styles/colors';
import LinkIcon from 'material-ui/svg-icons/content/link';
import {GridList, GridTile} from 'material-ui/GridList';
import { isEmpty } from 'lodash';

import {
  changeUsername,
} from './actions';

import {
  loadRepos,
  sort,
  filter,
} from '../App/actions';
import {
  selectRepos,
} from '../App/selectors';
import {
  FILTERING_OPTION_ODD_ID,
} from '../App/constants';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export const introMsg = "Input username from Github.com to fetch the user's repos Or simply click `FETCH REPOS`.";

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      onChangeUsername,
      onFetchRepos,
      onSort,
      onFilter,
      onDefault,
      repos,
    } = this.props;

    return (
      <article>
        <Helmet
          title="Home Page"
        />
        <div>
          <p>{introMsg}</p>
          <TextField
            hintText="skyuplam"
            onChange={onChangeUsername}
          />
          <RaisedButton
            label="Fetch Repos"
            onClick={onFetchRepos}
            primary
          />
        </div>
        {isEmpty(repos) ? null :
          <div>
            <RaisedButton
              label="Sort by Name"
              onClick={onSort}
            />
            <RaisedButton
              label="Show odd ID only"
              onClick={onFilter}
            />
            <RaisedButton
              label="Default"
              onClick={onDefault}
              secondary
            />
          </div>
        }
        <br />
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
            {repos ? repos.map((r) => (
              <GridTile
                key={r.id}
                title={r.login}
                subtitle={`ID:${r.id}`}
                actionIcon={
                  <IconButton
                    href={r.html_url}
                    iconStyle={{
                      color: greenA200
                    }}
                  >
                    <LinkIcon />
                  </IconButton>
                }
                titleStyle={styles.titleStyle}
              >
                <img alt={r.login} src={r.avatar_url} />
              </GridTile>
            )) : null
          }
          </GridList>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onChangeUsername: React.PropTypes.func,
  onFetchRepos: React.PropTypes.func,
  onSort: React.PropTypes.func,
  onFilter: React.PropTypes.func,
  onDefault: React.PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onFetchRepos: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(loadRepos());
    },
    onSort: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(sort('login'));
    },
    onFilter: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(filter(FILTERING_OPTION_ODD_ID));
    },
    onDefault: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(sort('id'));
      dispatch(filter(null));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
