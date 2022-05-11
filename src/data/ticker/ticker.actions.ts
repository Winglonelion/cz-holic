import { CHANGE_SORT_MODE, FETCH_TICKERS } from './ticker.actions.name';
import { SORT_MODES } from './ticker.types';

export const fetchTickers = () => ({ type: FETCH_TICKERS });

export const changeSortMode = (sortMode: SORT_MODES) => ({
  type: CHANGE_SORT_MODE,
  payload: { sort_mode: sortMode },
});
