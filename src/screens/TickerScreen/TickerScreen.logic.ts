import { AppDispatch } from '$data/redux.store';
import { fetchTickers } from '$data/ticker/ticker.actions';
import {
  isFetchingTickersSelector,
  tickersSelector,
} from '$data/ticker/ticker.selectors';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTickerScreenLogic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tickers = useSelector(tickersSelector);
  const isLoading = useSelector(isFetchingTickersSelector);

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  return {
    tickers,
    isLoading,
    onRefresh,
  };
};

export default useTickerScreenLogic;
