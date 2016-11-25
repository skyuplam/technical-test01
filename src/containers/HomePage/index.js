import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

import {
  changeUsername,
} from './actions';

import {
  loadRepos,
} from '../App/actions';
import {
  selectRepos,
} from '../App/selectors';

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

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      onChangeUsername,
      onFetchRepos,
      repos,
    } = this.props;

    return (
      <article>
        <Helmet
          title="Home Page"
        />
        <p>Input username from Github.com to fetch the user's repos.</p>
        <TextField
          hintText="skyuplam"
          onChange={onChangeUsername}
        />
        <RaisedButton
          label="Fetch Repos"
          onClick={onFetchRepos}
          primary
        /><br />
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
            {repos ? repos.map((r) => (
              <GridTile
                key={r.id}
                title={r.login}

                titleStyle={styles.titleStyle}
              >
                <img src={r.avatar_url} />
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
  onChangeUsername: React.PropTypes.func,
  onFetchRepos: React.PropTypes.func,
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
  };
};

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
