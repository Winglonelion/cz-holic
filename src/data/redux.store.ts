// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './redux.root.reducer';
// Imports: Redux Root Saga
import { rootSaga } from './root.saga';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Exports
export { store };
