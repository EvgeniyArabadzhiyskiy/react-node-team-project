import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
// import {  useState } from 'react';

import { useBalanceList } from 'hooks';
import { useInfiniteScroll } from 'hooks';
import { useGetTransaction } from 'hooks';

import HomTabMobile from './HomTabMobile';
import HomeTabDesctop from './HomeTabDesctop';
import ButtonAddTransactions from 'components/Buttons/ButtonAddTransactions';


const HomeTab = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');

  const transactions = useGetTransaction();
  const lastElement = useInfiniteScroll();

  const { deletedId } = useSelector(state => state.transactions);
  console.log("deletedId", deletedId);
  // const [deletedId, setDeletedId] = useState([])
  
  const visibleTransactions = deletedId.reduce((acc, id) => {
    return acc.filter(item => item._id !== id)

  },[...transactions])
  // console.log("visibleTransactions  visibleTransactions", visibleTransactions);
  
  const balances = useBalanceList(visibleTransactions);



  // const visibleTransactions = transactions.filter((trans) => {
  //   const result = trans._id !== transId
  //   return result
  // })

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
