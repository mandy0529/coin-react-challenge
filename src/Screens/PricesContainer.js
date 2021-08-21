import React from 'react';
import {home} from '../api';
import PricesPresenter from './PricesPresenter';

class PricesContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    prices: null,
  };

  async componentDidMount() {
    try {
      const data = await home.prices();
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
