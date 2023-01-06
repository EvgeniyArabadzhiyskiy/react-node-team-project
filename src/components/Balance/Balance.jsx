// import { useSelector } from 'react-redux';
import { useGetAllTransactionsQuery } from 'redux/WalletApiServise/wallet-api';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  // const { totalBalance } = useSelector(state => state.transactions);


  const { data: totalBalance = 0 } = useGetAllTransactionsQuery(1, {
    selectFromResult: ({ data }) => ({ data: data?.userBalance }),
  });

  
  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{totalBalance}</Text>
    </Container>
  );
};

export default Balance;
