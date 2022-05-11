import { AnyAction } from 'redux';
import { TickerResponse } from '$api/ticker/ticker.data.types';
import { FETCH_STATUS } from '$constants/fetch.status.types';
import {
  FETCH_TICKERS_FAILURE,
  FETCH_TICKERS,
  FETCH_TICKERS_SUCCESS,
  CHANGE_SORT_MODE,
  CHANGE_SORT_MODE_SUCCESS,
} from './ticker.actions.name';
import { SORT_MODES } from './ticker.types';

// Initial State

interface TickerState {
  tickers: TickerResponse[];
  status: FETCH_STATUS;
  last_fetched_time: number | null;
  errors: string[] | null;
  sort_mode: SORT_MODES;
}

const initialState: TickerState = {
  tickers: [],
  status: FETCH_STATUS.IDLE,
  last_fetched_time: null,
  errors: null,
  sort_mode: SORT_MODES.HOT,
};

// Redux: ticker reducer
const tickerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TICKERS: {
      return {
        ...state,
        status: FETCH_STATUS.PENDING,
      };
    }

    case FETCH_TICKERS_SUCCESS: {
      return {
        ...state,
        tickers: action.payload.tickers as TickerResponse[],
        last_fetched_time: new Date().getTime(),
        status: FETCH_STATUS.SUCCESS,
      };
    }

    case FETCH_TICKERS_FAILURE: {
      return {
        ...state,
        errors: action.payload.errors as string[],
        status: FETCH_STATUS.FAILURE,
      };
    }

    case CHANGE_SORT_MODE: {
      return {
        ...state,
        sort_mode: action.payload.sort_mode as SORT_MODES,
      };
    }

    case CHANGE_SORT_MODE_SUCCESS: {
      return {
        ...state,
        tickers: action.payload.tickers as TickerResponse[],
      };
    }

    default: {
      return state;
    }
  }
};

// Exports
export default tickerReducer;
