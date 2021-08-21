import styled from 'styled-components';
import Loader from '../Components/Loader';

const Container = styled.div`
  width: 100%;
  font-size: 20px;
`;

function PricesPresenter({loading, error, prices}) {
  return <>{loading ? <Loader /> : <Container></Container>}</>;
}

export default PricesPresenter;
