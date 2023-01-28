import { useSelector } from 'react-redux';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  const { removedSum } = useSelector(state => state.transactions);
  const { data = {} } = useGetBalanceQuery();
  const userBalance = data.userBalance 
  // - removedSum 
  || 0;

  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{userBalance}</Text>
    </Container>
  );
};

export default Balance;
