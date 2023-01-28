import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
// import {  useState } from 'react';

import { useBalanceList } from 'hooks';
import { useInfiniteScroll } from 'hooks';
import { useGetTransaction } from 'hooks';

import HomTabMobile from './HomTabMobile';
import HomeTabDesctop from './HomeTabDesctop';
import ButtonAddTransactions from 'components/Buttons/ButtonAddTransactions';
import { useState } from 'react';


const HomeTab = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');

  const transactions = useGetTransaction();
  // console.log("HomeTab  transactions", transactions);
  const lastElement = useInfiniteScroll();

  
  
  const { editedTransaction } = useSelector(state => state.transactions)
  // console.log("HomeTab  editedTransaction", editedTransaction);



  // const rrrr = transactions.find(item => item._id === editedTransaction?._id)
  // console.log("HomeTab  rrrr", rrrr);


const hhhh = transactions.map(item => {

  if (item._id === editedTransaction?._id) {
    return {
      // ...item,
      // amount: editedTransaction.amount,
      // comment: editedTransaction.comment,
      // category: editedTransaction.category,
      ...editedTransaction
    }
  }
  return item

})
  // console.log("hhhh  hhhh", hhhh);
  

  const { deletedId } = useSelector(state => state.transactions);
  // const [deletedId, setDeletedId] = useState([])
  console.log("deletedId", deletedId);
  
  const visibleTransactions = deletedId.reduce((acc, id) => {
    return acc.filter(item => item._id !== id)

  },[...hhhh])
  // console.log("visibleTransactions  visibleTransactions", visibleTransactions);
  
  const balances = useBalanceList(visibleTransactions);


  return (
    <div>
      {isMobile && (
        <HomTabMobile
          balances={balances}
          lastElement={lastElement}
          transactions={transactions}
        />
      )}
      {isDesctop && (
          <HomeTabDesctop
            balances={balances}
            lastElement={lastElement}
            transactions={visibleTransactions}

            // setDeletedId={setDeletedId}
            
            // getTransId={getTransId}
            // clear={clear}
            // handleClick={handleClick}
          />      
      )}

      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;
