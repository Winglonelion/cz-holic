// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import tickerReducer from './ticker/ticker.reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  ticker: tickerReducer,
});
// Exports
export default rootReducer;
