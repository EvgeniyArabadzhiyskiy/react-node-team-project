import moment from 'moment';
import { forwardRef, useRef } from 'react';
import { GoSettings } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { StyledList, CategoryName, StyledItem, ContextMenu, DeleteBtn, SettingBtn, CloseBtn } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { sendMsg } from 'helpers/formAddTransaction/sendMessage';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import { useDispatch } from 'react-redux';
import {  clearDeletedId, setDeletedId, setEditId, setRemovedAmount } from 'redux/transactions/transactionsSlice';
// import { toast } from 'react-toastify';
import { getRemovedAmount } from 'helpers/formAddTransaction/getRemovedAmount';
import { useState } from 'react';
import { modalTransactionOpen, setModalKey } from 'redux/modal/modalSlice';

const HomeTabItem = forwardRef(({ transaction }, ref) => {
  const { _id, date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  
  const timeoutId = useRef()
  const dispatch = useDispatch()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isDelete, setIsDelete] = useState(true)

  const [deleteTrans] =  useDeleteTransactionMutation()

  const onDelete = (id) => {
    setIsDelete(false)
    

    timeoutId.current = setTimeout( async () => {
      await deleteTrans(id)

      // setDeletedId(prev => [...prev, id]) // стирается данные в useState([]) при смене роута
      dispatch(setDeletedId(id))
      const removedAmount = getRemovedAmount(typeOperation, amount)
      dispatch(setRemovedAmount(removedAmount))
      
      console.log("DELETE");
      
    }, 3000);


    // toast(
    // <>
    //   <h1 style={{color: "tomato", width: '400px'}}>"Deleting Success"</h1>
    //   <button onClick={() => clear(id)}>Cancel??</button>
    // </>, {pauseOnHover: false, autoClose: 5000,}) 
  }

  const onEdit = (id) => {
    dispatch(modalTransactionOpen(true));
    dispatch(setModalKey("EDIT"));
    dispatch(setEditId(id))
    setIsOpenMenu(false)
  }
    

  const clear = (id) => {
    setIsDelete(true)
    
    // setDeletedId(prev => prev.filter(removedId => removedId !== id ))   // стирается данные в useState([]) при смене роута
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
        <CategoryName>
          <SettingBtn onClick={handleMenu} ><GoSettings /></SettingBtn>
        </CategoryName>
        
        <CategoryName>{operationDate}</CategoryName>
        <CategoryName>
          {getSymbolType(typeOperation)}
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
      <ContextMenu isOpenMenu={isOpenMenu} isDelete={isDelete}>
        <CloseBtn onClick={handleMenu} ><RxCross2 /></CloseBtn>
        <DeleteBtn onClick={() => onEdit(_id)}>EDIT</DeleteBtn>
        { isDelete && <DeleteBtn onClick={() => onDelete(_id)}>DELETE</DeleteBtn>}
        { !isDelete &&  <DeleteBtn onClick={() => clear(_id)}>CANCEL</DeleteBtn>}
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
