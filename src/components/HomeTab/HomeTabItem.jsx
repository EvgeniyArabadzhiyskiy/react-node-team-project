import moment from 'moment';
import { forwardRef, useRef } from 'react';
import { StyledList, CategoryName, StyledItem, ContextMenu } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { sendMsg } from 'helpers/formAddTransaction/sendMessage';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import { useDispatch } from 'react-redux';
import {  clearDeletedId, setDeletedId, setRemovedAmount } from 'redux/transactions/transactionsSlice';
// import { toast } from 'react-toastify';
import { getRemovedAmount } from 'helpers/formAddTransaction/getRemovedAmount';
import { useState } from 'react';

const HomeTabItem = forwardRef(({ transaction,  }, ref) => {
  const { _id, date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  
  const timeoutId = useRef()
  const dispatch = useDispatch()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isDelete, setIsDelete] = useState(true)

  const [deleteTrans] =  useDeleteTransactionMutation()

  const handleClick = (id) => {
    // setDeletedId(prev => [...prev, id])

    setIsDelete(false)
    

    timeoutId.current = setTimeout( async () => {
      await deleteTrans(id)

      dispatch(setDeletedId(id))
      const removedAmount = getRemovedAmount(typeOperation, amount)
      dispatch(setRemovedAmount(removedAmount))
      
      console.log("DELETE");
      
    }, 6000);


    // toast(
    // <>
    //   <h1 style={{color: "tomato", width: '400px'}}>"Deleting Success"</h1>
    //   <button onClick={() => clear(id)}>Cancel??</button>
    // </>, {pauseOnHover: false, autoClose: 5000,})

    // return <>
    //   <h1 style={{color: "tomato", width: '400px'}}>"Deleting Success"</h1>
    //    <button onClick={() => clear(id)}>Cancel??</button>
    // </>

    
  }
    

  const clear = (id) => {
    // setDeletedId(prev => prev.filter(removedId => removedId !== id ))
    
    setIsDelete(true)
    
    dispatch(clearDeletedId(id))
    clearTimeout(timeoutId.current)
    
    // const removedAmount = getRemovedAmount(typeOperation, amount)
    // dispatch(setRemovedAmount(-removedAmount))
    
    
    console.log("CLEAR");
  }

  const handleMenu = () => {
    setIsOpenMenu(s => !s)
  }

 

  

  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const bodyTransaction = (
    <>
      <>
        <CategoryName>{operationDate}</CategoryName>
        <CategoryName>
          {/* <button onClick={() => handleClick(_id)}>Delete</button> */}
          {/* <button onClick={() => clear()}>Cancel</button> */}
          {/* {getSymbolType(typeOperation)} */}
        </CategoryName>
        <CategoryName>{category}</CategoryName>
        <CategoryName>{comment}</CategoryName>
        <CategoryName 
          onClick={() => sendMsg(isLongAmount, amount)} 
          style={{ color: typeOperation === 'income' ? '#24CCA7' : '#FF6596' }}>
          {isLongAmount ? "Click" : amount}
        </CategoryName>
        <CategoryName 
          onClick={() => sendMsg(isLongBalance, itemBalance)} 
        >{isLongBalance ? "Click" : itemBalance}
        </CategoryName>
        <button onClick={handleMenu} >#</button>
      </>
      <ContextMenu isOpenMenu={isOpenMenu} isDelete={isDelete}>
        <button onClick={handleMenu} >X</button>
        { isDelete && <button onClick={() => handleClick(_id)}>Delete</button>}
        { !isDelete &&  <button onClick={() => clear(_id)}>Отмена??</button>}
      </ContextMenu>
    </>
  );

  const content = ref 
  ? <StyledItem ref={ref}>{bodyTransaction}</StyledItem>
  : <StyledItem >{bodyTransaction}</StyledItem>;

  return content;
});

const HomeTabMobItem = forwardRef(({ transaction }, ref ) => {
  const { date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');

  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const bodyTransaction = 
  <span onClick={() => sendMsg(isLongBalance, itemBalance)}>
    {isLongBalance ? "Click" : itemBalance}
  </span>
    
  const content = ref 
  ? <li ref={ref}>Balance {bodyTransaction}</li>
  : <li>Balance {bodyTransaction}</li> ;

  return (
    <StyledList borders={typeOperation}>
      <li>Date <span>{operationDate}</span></li>
      <li>Type <span>{getSymbolType(typeOperation)}</span></li>
      <li>Category <span>{category}</span></li>
      <li>Comment <span>{comment}</span></li>
      <li> Sum
        <span
          onClick={() => sendMsg(isLongAmount, amount)}
          style={{ color: typeOperation === 'income' ? '#24CCA7' : '#FF6596' }}>
          {isLongAmount ? "Click" : amount}
        </span>
      </li>
      {content}
    </StyledList>
  );
});

export { HomeTabItem, HomeTabMobItem };
