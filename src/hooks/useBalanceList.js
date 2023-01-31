import { useMemo } from 'react';
import { getBalances } from 'helpers/formAddTransaction/getBalance';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';

export const useBalanceList = transactions => {
  const { data: balance = {} } = useGetBalanceQuery();
  const totalBalance = balance.userBalance;

  const balances = useMemo(
    () => getBalances(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
