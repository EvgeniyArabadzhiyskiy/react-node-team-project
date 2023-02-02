import moment from 'moment';
import { useMedia } from 'react-use';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DetailsMobileItem from 'components/HomeTab/DetailsMobileItem';
import DetailsDesctopItem from 'components/HomeTab/DetailsDesctopItem';

import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { modalTransactionOpen, setModalKey } from 'redux/modal/modalSlice';
import { useDeleteTransactionMutation } from 'redux/walletsApiServise/wallet-api';
import {  clearDeletedId, deleteTransaction, setDeletedId, setEditId } from 'redux/transactions/transactionsSlice';

const HomeTabItem = (({ transaction, lastElement}) => {
  const { _id, date, typeOperation, category, comment, amount, itemBalance } = transaction;

  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');
  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');

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
  
  return (<>
    {isMobile && (
      <DetailsMobileItem
        amount={amount}
        comment={comment}
        category={category}
        itemBalance={itemBalance}
        operationDate={operationDate}
        typeOperation={getSymbolType(typeOperation)}
  
        ref={lastElement}
        isLongAmount={isLongAmount}
        isLongBalance={isLongBalance}
  
        isDelete={isDelete}
        isOpenMenu={isOpenMenu}
        onContextMenu={onContextMenu}
        onEdit={() => onEdit(_id)}
        onClearId={() => onClearId(_id)}
        onDelete={() => onDelete(_id)}        
      />
    )}

    {isDesctop && (
      <DetailsDesctopItem
        amount={amount}
        comment={comment}
        category={category}
        itemBalance={itemBalance}
        operationDate={operationDate}
        typeOperation={getSymbolType(typeOperation)}

        ref={lastElement}
        isLongAmount={isLongAmount}
        isLongBalance={isLongBalance}

        isDelete={isDelete}
        isOpenMenu={isOpenMenu}
        onContextMenu={onContextMenu}
        onEdit={() => onEdit(_id)}
        onClearId={() => onClearId(_id)}
        onDelete={() => onDelete(_id)}   
      />
    )}
    </>
  )

});

export default HomeTabItem ;








