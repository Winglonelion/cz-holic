// Imports: Dependencies
import { AxiosResponse } from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { getTicker24H } from '$api/ticker/ticker.api';
import { TickerResponse } from '$api/ticker/ticker.data.types';
import {
  CHANGE_SORT_MODE,
  CHANGE_SORT_MODE_SUCCESS,
  FETCH_TICKERS,
  FETCH_TICKERS_FAILURE,
  FETCH_TICKERS_SUCCESS,
} from './ticker.actions.name';
import { sortModeSelector, tickersSelector } from './ticker.selectors';
import { AnyAction } from 'redux';
import { SORT_MODES } from './ticker.types';
function* fetchTickersAsync() {
  try {
    const response: AxiosResponse<TickerResponse[]> = yield call(getTicker24H);
    const { data = [] } = response ?? {};
    const sortMode: SORT_MODES = yield select(sortModeSelector);
    const sortFunction = buildSortFunction(sortMode);
    const result = data.sort(sortFunction);
    yield put({
      type: FETCH_TICKERS_SUCCESS,
      payload: {
        tickers: result,
      },
    });
  } catch (error: any) {
    yield put({
      type: FETCH_TICKERS_FAILURE,
      payload: {
        errors: [(error?.message as string) ?? 'unknown error'],
      },
    });
  }
}

// TODO: as expected every times changed sort mode, the tickers should be fetched again
function* changeSortModeAsync(action: AnyAction) {
  const currentTickers: TickerResponse[] = yield select(tickersSelector);
  const tickers = [...currentTickers];
  const sortMode: SORT_MODES = action?.payload?.sort_mode;
  const sortFunction = buildSortFunction(sortMode);
  tickers.sort(sortFunction);
  yield put({
    type: CHANGE_SORT_MODE_SUCCESS,
    payload: {
      tickers: tickers,
    },
  });
}

function buildSortFunction(sortMode: SORT_MODES) {
  switch (sortMode) {
    case SORT_MODES.HOT: {
      // hot symbol calculated by total bid and ask of a token
      // re-implement with better output using weighted average
      return (a: TickerResponse, b: TickerResponse) => {
        // return (
        //   Number.parseFloat(b.bidQty) +
        //   Number.parseFloat(b.askQty) -
        //   (Number.parseFloat(a.bidQty) + Number.parseFloat(a.askQty))
        // );

        return (
          Number.parseFloat(b.weightedAvgPrice) -
          Number.parseFloat(a.weightedAvgPrice)
        );
      };
    }

    case SORT_MODES.GAINER: {
      // gainers calculated by percent rise of a token
      return (a: TickerResponse, b: TickerResponse) => {
        return (
          Number.parseFloat(b.priceChangePercent) -
          Number.parseFloat(a.priceChangePercent)
        );
      };
    }

    case SORT_MODES.LOSER: {
      // losers calculated by percent lose of a token
      return (a: TickerResponse, b: TickerResponse) => {
        return (
          Number.parseFloat(a.priceChangePercent) -
          Number.parseFloat(b.priceChangePercent)
        );
      };
    }

    case SORT_MODES['24VOL']: {
      // 24h volume calculated by 24h volume of a token
      return (a: TickerResponse, b: TickerResponse) => {
        return Number.parseFloat(b.volume) - Number.parseFloat(a.volume);
      };
    }

    default:
      // default sort by symbol
      return (a: TickerResponse, b: TickerResponse) => {
        return a.symbol > b.symbol ? 1 : 0;
      };
  }
}

export function* watchFetchTickers() {
  // Take Last Action Only
  yield takeLatest(FETCH_TICKERS, fetchTickersAsync);
  yield takeLatest(CHANGE_SORT_MODE, changeSortModeAsync);
}
