import { getBalances } from 'helpers/formAddTransaction/getBalance';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';

export const useBalanceList = transactions => {
  const { removedSum } = useSelector(state => state.transactions);

  const { data: balance = {} } = useGetBalanceQuery();
  const totalBalance = balance.userBalance 
  // - removedSum;

  const balances = useMemo(
    () => getBalances(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
