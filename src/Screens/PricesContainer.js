import React from 'react';
import {coin} from '../api';
import PricesPresenter from './PricesPresenter';

class PricesContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    prices: null,
  };

  async componentDidMount() {
    try {
      const data = await coin.home();
      console.log(data, 'data');
    } catch (error) {
      this.setState({error: "can't find anything"});
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {loading, error, prices} = this.state;
    return (
      <>
        <h1>prices</h1>
        <PricesPresenter loading={loading} prices={prices} error={error} />
      </>
    );
  }
}
export default PricesContainer;
