import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin: 30px;
`;
const Alink = styled(Link)`
  font-weight: bold;
`;
const List = styled.li`
  border: 5px solid white;
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 20px;
  background-color: ${(props) => (props.current ? 'white' : 'transparent')};
  color: ${(props) => (props.current ? 'black' : 'white')};
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Ul = styled.ul`
  display: flex;
  margin-left: 50px;
`;
function Header({location: {pathname}}) {
  return (
    <>
      <Title>Coin Explorer</Title>
      <Ul>
        <List current={pathname === '/prices'}>
          <Alink to="/prices">PRICES</Alink>
        </List>
        <List current={pathname === '/exchanges'}>
          <Alink to="/exchanges">EXCHANGES</Alink>
        </List>
        <List current={pathname === '/coins'}>
          <Alink to="/coins">COINS</Alink>
        </List>
      </Ul>
    </>
  );
}

export default withRouter(Header);
