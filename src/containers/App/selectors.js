/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { orderBy, filter, has, toLower, get } from 'lodash';
import {
  FILTERING_OPTION_ODD_ID,
  FILTERING_OPTION_EVEN_ID,
} from './constants';


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

const selectSorting = () => createSelector(
  selectGlobal(),
  (homeState) => homeState.get('sorting')
);

const selectFiltering = () => createSelector(
  selectGlobal(),
  (homeState) => homeState.get('filtering')
);

const selectRepos = () => createSelector(
  selectGlobal(),
  selectSorting(),
  selectFiltering(),
  (globalState, sorting, filtering) => orderBy(filter(
    globalState.getIn(['userData', 'repos']),
    (o) => {  // filtering with criterion
      if (!has(o, 'id')) return true;  // no filter if there is no id property

      switch (filtering) {
        case FILTERING_OPTION_ODD_ID:
          return o.id % 2 !== 0
        case FILTERING_OPTION_EVEN_ID:
          return o.id % 2 === 0
        default:
          return true;
      }
    }
  ), (o) => toLower(get(o, sorting)), ['asc'])  // lower the string and order it by the criterion ascendingly
);

export {
  selectGlobal,
  selectLocationState,
  selectSorting,
  selectFiltering,
  selectRepos,
};
