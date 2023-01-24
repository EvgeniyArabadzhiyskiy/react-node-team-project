import { getBalances } from 'helpers/formAddTransaction/getBalance';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetBalanceQuery } from 'redux/walletsApiServise/wallet-api';


const arrayAAA = [1,2,3,4,5,6,7,8,9,10]


const arrayBBB = [9, 10]


const filtredArr = arrayBBB.reduce((acc, ggg) => {
  const kkk = acc.filter(item => item !== ggg)

  return kkk
},[...arrayAAA])

// console.log("filtredArr  filtredArr", filtredArr);






export const useBalanceList = transactions => {

  const {  removedSum } = useSelector(state => state.transactions);
  // console.log("useBalanceList  removedSum", removedSum);

  const { data: balance = {} } = useGetBalanceQuery();
  const totalBalance = balance.userBalance 
  - removedSum;

  const balances = useMemo(
    () => getBalances(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
