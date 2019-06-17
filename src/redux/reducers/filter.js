import { SET_FILTER } from '../actions/types';
import { FILTER } from '../../constants';

export default (state = FILTER.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
