import axios from 'axios';

const getApi = axios.create({
  baseUrl: 'https://api.coinpaprika.com/v1/',
});

export const home = {
  prices: () => getApi.get('tickers'),
};

export const coinApi = {
  coins: () => getApi.get('coins'),
};

export const exchangeApi = {
  exchanges: () => getApi.get('exchanges'),
};

export default getApi;
