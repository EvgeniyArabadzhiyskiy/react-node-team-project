import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, setUnmount } from 'redux/transactions/transactionsSlice';
import { useGetAllTransactionsQuery } from 'redux/walletsApiServise/wallet-api';

export const useGetTransaction = () => {
  const dispatch = useDispatch();
  const { transactions, pageNum } = useSelector(state => state.transactions);
  // console.log("UPDATE");
 
  const { data = {} } = useGetAllTransactionsQuery({ pageNum, limit: 10 });

  useEffect(() => {
    return () => {
      dispatch(setUnmount(true));
    };
  }, [dispatch]);

  useEffect(() => {
    if (!data.transactions) return;
    dispatch(getTransactions(data));
  }, [data, dispatch]);

  return transactions;
};
