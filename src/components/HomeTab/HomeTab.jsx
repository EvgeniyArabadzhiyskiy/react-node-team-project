import { useMedia } from 'react-use';

import { useBalanceList } from 'hooks';
import { useInfiniteScroll } from 'hooks';
import { useGetTransaction } from 'hooks';

import HomTabMobile from './HomTabMobile';
import HomeTabDesctop from './HomeTabDesctop';
import ButtonAddTransactions from 'components/Buttons/ButtonAddTransactions';
import { useDispatch } from 'react-redux';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import {  useState } from 'react';


const HomeTab = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');

  const transactions = useGetTransaction();
  const lastElement = useInfiniteScroll();


  
  const [transId, setTransId] = useState('')
  // console.log("HomeTab  transId", transId);
  
  const getTransId = (id) => {
    setTransId(id)

    // setTransId(prev => [...prev, id])

  }
  
  
  const visibleTransactions = transactions.filter((trans) => {
      const fff = trans._id !== transId
      return fff
    })
    // console.log("visibleTransactions  visibleTransactions", visibleTransactions);
    
    const balances = useBalanceList(visibleTransactions);
    console.log("HomeTab  balances", balances);

  // const timeoutId = useRef()
  // const dispatch = useDispatch()
  // const [deleteTrans] =  useDeleteTransactionMutation()

  // const handleClick = (id) => {
  //   console.log("handleClick  id", id);
  //   // setTransId(id)

  //   timeoutId.current = setTimeout( async () => {
  //     // await deleteTrans(id)
  //     console.log("DELETE");
  //     dispatch(resetTransactions());
      
  //   }, 6000);
  //   console.log("timeoutId.current", timeoutId.current);


  //   toast.success(
  //   <>
  //     <h1 style={{color: "tomato"}}>"Deleting Success"</h1>
  //     <button onClick={() => clear()}>Cancel??</button>
  //   </>, {pauseOnHover: false, autoClose: 5000,})

    
  // }

  // const clear = () => {
  //   console.log("CLEAR");
  //   console.log("timeoutId.current", timeoutId.current);
  //   clearTimeout(timeoutId.current)
  // }

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

          getTransId={getTransId}
          // clear={clear}
          // handleClick={handleClick}
        />
      )}

      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;
