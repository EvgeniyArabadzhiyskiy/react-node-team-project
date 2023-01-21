import moment from 'moment';
import { forwardRef } from 'react';
import { StyledList, CategoryName, StyledItem } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { sendMsg } from 'helpers/formAddTransaction/sendMessage';


const HomeTabItem = forwardRef(({ transaction }, ref) => {
  const { date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const operationDate = moment(new Date(date)).format('DD.MM.YYYY');

  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const bodyTransaction = (
    <>
      <CategoryName>{operationDate}</CategoryName>
      <CategoryName>{getSymbolType(typeOperation)}</CategoryName>
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
