import { useMedia } from 'react-use';
import {  useCallback, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
  CategoryName,
} from './HomeTab.styled';

import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import { getBalances } from 'helpers/formAddTransaction/getBalance';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import { useGetAllTransactionsQuery } from 'redux/WalletApiServise/wallet-api';
import { getNextPage, getTransactions, setUnmount } from 'redux/transactions/transactionsSlice';

const HomeTab = () => {
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');
  
  const { transactions, pageNum } = useSelector(state => state.transactions);
  const { data = {} } = useGetAllTransactionsQuery(pageNum)
    
  useEffect(() => {
    return () => {
      dispatch(setUnmount(true));
    }
  },[dispatch]);

  useEffect(() => {
    if(!data.transactions) return
    dispatch(getTransactions(data));
    
  },[data, dispatch]);


  const observer = useRef();

  const lastElement = useCallback(item => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        dispatch(setUnmount(false));

        // console.log('ОЧИСТИЛИ НАБЛЮДЕНИЕ :', entries[0].target,);

        // observer.current.unobserve(entries[0].target);
        observer.current.unobserve(item);
        dispatch(getNextPage());
      }
    }, { rootMargin: '5px',threshold: 0.95});

      if (item)  {
        // console.log('НАБЛЮДЕНИЕ ВЕДЕТСЯ ЗА :', item);
        observer.current.observe(item);
      }
    },[dispatch]
    
  );


  const balances = useMemo(() => getBalances(transactions, data.userBalance),
   [data.userBalance, transactions])

  return (
    <div>
      { isMobile  &&
        <StyledWrap>
          {transactions.map(
            ({ _id, date, typeOperation, category, comment, amount }, idx) => {
              const itemBalance = balances[idx];

              if (transactions.length === idx + 1) {
                return (
                  <HomeTabMobItem
                    ref={lastElement}
                    key={_id}
                    transaction={{_id, date, typeOperation, category, comment, amount, itemBalance }}
                  />
                );
              }

              return (
                <HomeTabMobItem
                  key={_id}
                  transaction={{ _id, date, typeOperation, category, comment, amount, itemBalance }}
                />
              )}
          )}
        </StyledWrap>
      }
       { isDesctop  &&
        <StyledTable>
          <StyledTableHeader>
            <CategoryName>Date</CategoryName>
            <CategoryName>Type</CategoryName>
            <CategoryName>Category</CategoryName>
            <CategoryName>Comment</CategoryName>
            <CategoryName>Sum</CategoryName>
            <CategoryName>Balance</CategoryName>
          </StyledTableHeader>

          { transactions.length > 0 && <StyledTableBody>
            {transactions.map(({ _id, date, typeOperation, category, comment, amount }, idx ) => {
              const itemBalance = balances[idx];

              if (transactions.length === idx + 1) {
                return (
                  <HomeTabItem
                    key={_id}
                    ref={lastElement}
                    transaction={{ _id, date, typeOperation, category, comment, amount, itemBalance }}
                  />
                )
              }

              return (
                <HomeTabItem
                  key={_id}
                  transaction={{ _id, date, typeOperation, category, comment, amount, itemBalance }}
                />
              )}
            )}
          </StyledTableBody>}
        </StyledTable>}
      
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;