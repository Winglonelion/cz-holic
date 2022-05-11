// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchFetchTickers } from './ticker/ticker.saga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    //
    fork(watchFetchTickers),
  ]);
}
