import { getBalances } from 'helpers/formAddTransaction/getBalance';
import { useMemo } from 'react';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';

export const useBalanceList = transactions => {
  console.log("useBalanceList  transactions", transactions);
  const { data: balance = {} } = useGetBalanceQuery();
  const totalBalance = balance.userBalance 
  // - 1000;

  const balances = useMemo(
    () => getBalances(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
