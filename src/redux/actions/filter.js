import { SET_FILTER } from './types';
import { FILTER } from '../../constants';

export const setFilter = (filter = FILTER.ALL) => ({
    type: SET_FILTER,
    payload: { filter }
  });
