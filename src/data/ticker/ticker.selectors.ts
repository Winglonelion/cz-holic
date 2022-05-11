import { FETCH_STATUS } from '$constants/fetch.status.types';
import { RootState } from '../redux.store';

export const tickersSelector = (state: RootState) => state.ticker.tickers;

export const isFetchingTickersSelector = (state: RootState) =>
  state.ticker.status === FETCH_STATUS.PENDING;

export const sortModeSelector = (state: RootState) => state.ticker.sort_mode;
