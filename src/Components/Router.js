import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import CoinsContainer from '../Screens/CoinsContainer';
import ExchangesContainer from '../Screens/ExchangesContainer';
import PricesContainer from '../Screens/PricesContainer';
import Header from './Header';

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route exact={true} path="/coins" component={CoinsContainer} />
      <Route exact={true} path="/exchanges" component={ExchangesContainer} />
      <Route exact={true} path="/prices" component={PricesContainer} />
    </HashRouter>
  );
};

export default Router;
