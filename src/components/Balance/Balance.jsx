import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  const { data: totalBalance = 0 } = useGetBalanceQuery();

  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{totalBalance}</Text>
    </Container>
  );
};

export default Balance;
