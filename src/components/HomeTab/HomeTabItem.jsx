import moment from 'moment';
import { forwardRef, useRef } from 'react';
import { GoSettings } from 'react-icons/go';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledList, CategoryName, StyledItem, SettingBtn} from './HomeTab.styled';

import { sendMsg } from 'helpers/formAddTransaction/sendMessage';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';

import { modalTransactionOpen, setModalKey } from 'redux/modal/modalSlice';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import {  clearDeletedId, deleteTransaction, setDeletedId, setEditId } from 'redux/transactions/transactionsSlice';
import ContextMenu from 'components/ContextMenu';
// import { toast } from 'react-toastify';


const HomeTabItem = forwardRef(({ transaction }, ref) => {
  const { _id, date, typeOperation, category, comment, amount, itemBalance } = transaction;

  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""
  
  const timeoutId = useRef()
  const dispatch = useDispatch()
 
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isDelete, setIsDelete] = useState(true)

  const [deleteTrans] =  useDeleteTransactionMutation()

  const onContextMenu = () => {
    setIsOpenMenu(prev => !prev)
  }

  const onDelete = (id) => {
    setIsDelete(false)
    
    timeoutId.current = setTimeout( async () => {
      await deleteTrans(id)

      // setDeletedId(prev => [...prev, id]) // стирается данные в useState([]) при смене роута
      dispatch(setDeletedId(id))
      dispatch(deleteTransaction())

    }, 3000);
  }

  const onClearId = (id) => {
    setIsDelete(true)
    
    // setDeletedId(prev => prev.filter(removedId => removedId !== id ))   // стирается данные в useState([]) при смене роута
    dispatch(clearDeletedId(id))
    clearTimeout(timeoutId.current)
  }

  const onEdit = (id) => {
    dispatch(modalTransactionOpen(true));
    dispatch(setModalKey("EDIT"));
    dispatch(setEditId(id))
    setIsOpenMenu(false)
  }

  const bodyTransaction = (
    <>
      <CategoryName>
        <SettingBtn onClick={onContextMenu} ><GoSettings /></SettingBtn>
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
        
      <ContextMenu
        isOpenMenu={isOpenMenu}
        isDelete={isDelete}
        onContextMenu={onContextMenu}
        onEdit={() => onEdit(_id)}
        onDelete={() => onDelete(_id)}
        onClearId={() => onClearId(_id)}
      />
    </>
  );

  const content = ref 
  ? <StyledItem ref={ref}>{bodyTransaction}</StyledItem>
  : <StyledItem >{bodyTransaction}</StyledItem>;

  return content;
});





const HomeTabMobItem = forwardRef(({ transaction }, ref ) => {
  const {_id, date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const timeoutId = useRef()
  const dispatch = useDispatch()
 
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isDelete, setIsDelete] = useState(true)

  const [deleteTrans] =  useDeleteTransactionMutation()

  const onContextMenu = () => {
    setIsOpenMenu(prev => !prev)
  }

  const onDelete = (id) => {
    setIsDelete(false)
    
    timeoutId.current = setTimeout( async () => {
      await deleteTrans(id)

      dispatch(setDeletedId(id))
      dispatch(deleteTransaction())

    }, 3000);
  }

  const onClearId = (id) => {
    setIsDelete(true)
    
    dispatch(clearDeletedId(id))
    clearTimeout(timeoutId.current)
  }

  const onEdit = (id) => {
    dispatch(modalTransactionOpen(true));
    dispatch(setModalKey("EDIT"));
    dispatch(setEditId(id))
    setIsOpenMenu(false)
  }

  const bodyTransaction = 
  <span onClick={() => sendMsg(isLongBalance, itemBalance)}>
    {isLongBalance ? "Click" : itemBalance}
  </span>
    
  const content = ref 
  ? <li ref={ref}>Balance {bodyTransaction}</li>
  : <li>Balance {bodyTransaction}</li> ;

  return (
    <StyledList borders={typeOperation}>
    <li><SettingBtn onClick={onContextMenu} ><GoSettings /></SettingBtn></li>
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

    <ContextMenu
      isOpenMenu={isOpenMenu}
      isDelete={isDelete}
      onContextMenu={onContextMenu}
      onEdit={() => onEdit(_id)}
      onDelete={() => onDelete(_id)}
      onClearId={() => onClearId(_id)}
    />

  </StyledList>
  );
});

export { HomeTabItem, HomeTabMobItem };
