import { useSelector } from 'react-redux';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  const { totalBalance } = useSelector(state => state.transactions);
  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{totalBalance}</Text>
    </Container>
  );
};

export default Balance;
