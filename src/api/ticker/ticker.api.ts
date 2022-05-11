import axios from 'axios';
import { TickerResponse } from './ticker.data.types';

export function getTicker24H() {
  return axios.get<TickerResponse[]>(
    'https://api2.binance.com/api/v3/ticker/24hr',
  );
}
