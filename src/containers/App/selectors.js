/**
 * The global state selectors
 */
import { createSelector } from 'reselect';


const selectGlobal = () => (state) => state.get('global');

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGists = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['userData', 'gists'])
);

const selectRepos = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['userData', 'repos'])
);

export {
  selectGlobal,
  selectLocationState,
  selectGists,
  selectRepos,
};
