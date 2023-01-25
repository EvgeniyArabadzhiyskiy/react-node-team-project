import moment from 'moment';
import { forwardRef, useRef } from 'react';
import { StyledList, CategoryName, StyledItem } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { sendMsg } from 'helpers/formAddTransaction/sendMessage';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import { useDispatch } from 'react-redux';
import {  clearDeletedId, setDeletedId, setRemovedAmount } from 'redux/transactions/transactionsSlice';
import { toast } from 'react-toastify';

const HomeTabItem = forwardRef(({ transaction,  }, ref) => {
  const { _id, date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  
  const timeoutId = useRef()
  const dispatch = useDispatch()

  const [deleteTrans] =  useDeleteTransactionMutation()

  const getRemovedAmount = (typeOperation) => {
    switch (typeOperation) {
      case 'income':
        return  amount;

      case 'expense':
        return -amount;
    
      default:
        return;
    }
  }

  const handleClick = (id) => {
    // setDeletedId(prev => [...prev, id])

    dispatch(setDeletedId(id))
    const removedAmount = getRemovedAmount(typeOperation)
    dispatch(setRemovedAmount(removedAmount))

    timeoutId.current = setTimeout( async () => {
      await deleteTrans(id)
      console.log("DELETE");
      
    }, 6000);


    toast.success(
    <>
      <h1 style={{color: "tomato"}}>"Deleting Success"</h1>
      <button onClick={() => clear(id)}>Cancel??</button>
    </>, {pauseOnHover: false, autoClose: 5000,})

    
  }
    

  const clear = (id) => {
    // setDeletedId(prev => prev.filter(removedId => removedId !== id ))

    dispatch(clearDeletedId(id))
    const removedAmount = getRemovedAmount(typeOperation)
    dispatch(setRemovedAmount(-removedAmount))
    
    clearTimeout(timeoutId.current)
  }

 

  

  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const bodyTransaction = (
    <>
      <CategoryName>{operationDate}</CategoryName>
      <CategoryName>
        <button onClick={() => handleClick(_id)}>Delete</button>
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
    </>
  );

  const content = ref 
  ? <StyledItem ref={ref}>{bodyTransaction}</StyledItem>
  : <StyledItem>{bodyTransaction}</StyledItem>;

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
