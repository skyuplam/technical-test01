import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
} from './constants';

// The initial state
export const initialState = fromJS({
  username: '',
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.username);
    default:
      return state;
  }
}

export default homeReducer;
