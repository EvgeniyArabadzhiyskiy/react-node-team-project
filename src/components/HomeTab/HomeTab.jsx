import { forwardRef } from 'react';
import { useMedia } from 'react-use';
// import { useSelector } from 'react-redux';

import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
  CategoryName,
} from './HomeTab.styled';
import { getBalances } from 'helpers/formAddTransaction/getBalance';
// import { useGetAllTransactionsQuery } from 'redux/WalletApiServise/wallet-api';

const HomeTab = forwardRef(({ data, totalBalance }, ref) => {
  const isMobie = useMedia('(max-width: 767px)');
  // const { totalBalance } = useSelector(state => state.transactions);

  // const { totalBalance = 0 } = useGetAllTransactionsQuery(undefined, {
  //   selectFromResult: (response) => ({totalBalance: response.data?.userBalance})
  // })
 
    
  const balances = getBalances(data, totalBalance);

  return (
    <div>
      {isMobie ? (
        <StyledWrap>
          {data.map(
            ({ _id, date, typeOperation, category, comment, amount }, idx) => {
              const itemBalance = balances[idx];

              if (data.length === idx + 1) {
                return (
                  <HomeTabMobItem
                    ref={ref}
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
      ) : (
        <StyledTable>
          <StyledTableHeader>
            <CategoryName>Date</CategoryName>
            <CategoryName>Type</CategoryName>
            <CategoryName>Category</CategoryName>
            <CategoryName>Comment</CategoryName>
            <CategoryName>Sum</CategoryName>
            <CategoryName>Balance</CategoryName>
          </StyledTableHeader>

          <StyledTableBody>
            {data.map(({ _id, date, typeOperation, category, comment, amount }, idx ) => {
              const itemBalance = balances[idx];

              if (data.length === idx + 1) {
                return (
                  <HomeTabItem
                    key={_id}
                    ref={ref}
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
          </StyledTableBody>
        </StyledTable>
      )}
    </div>
  );
});

export default HomeTab;
