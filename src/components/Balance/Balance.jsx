import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  const { data = {} } = useGetBalanceQuery();
  const userBalance = data.userBalance;

  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{userBalance}</Text>
    </Container>
  );
};

export default Balance;
