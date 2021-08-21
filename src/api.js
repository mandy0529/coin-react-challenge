import axios from 'axios';

const getApi = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const coin = {
  home: () => getApi.get('tickers'),
};

export default getApi;
