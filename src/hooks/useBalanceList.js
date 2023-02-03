import { useMemo } from 'react';
import { getBalances } from 'helpers/formAddTransaction/getBalance';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';

export const useBalanceList = transactions => {
  const { data: totalBalance = 0 } = useGetBalanceQuery();

  const balances = useMemo(
    () => getBalances(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
