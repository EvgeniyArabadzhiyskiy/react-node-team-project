import moment from 'moment';
import { forwardRef } from 'react';
import { StyledList, CategoryName } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { sendMsg } from 'helpers/formAddTransaction/sendMessage';


const HomeTabItem = forwardRef(({ transaction }, ref) => {
  const { date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const currenrDate = moment(new Date(date)).format('DD.MM.YYYY');

  const isLongAmount = String(amount).length > 9 ? "Amount" : ""
  const isLongBalance = String(itemBalance).length > 10 ? "Balance" : ""

  const bodyTransaction = (
    <>
      <CategoryName>{currenrDate}</CategoryName>
      <CategoryName>{getSymbolType(typeOperation)}</CategoryName>
      <CategoryName>
        <span>{category}</span>
      </CategoryName>
      <CategoryName>{comment}</CategoryName>
      <p 
        onClick={() => sendMsg(isLongAmount, amount)} 
        style={{ color: typeOperation === 'income' ? '#24CCA7' : '#FF6596' }}>
        {isLongAmount ? "Click" : amount}
      </p>
      <CategoryName 
        onClick={() => sendMsg(isLongBalance, itemBalance)} 
      >{isLongBalance ? "Click" : itemBalance}
      </CategoryName>
    </>
  );

  const content = ref 
  ? <li ref={ref}>{bodyTransaction}</li>
  : <li>{bodyTransaction}</li>;

  return content;
});

const HomeTabMobItem = forwardRef(({ transaction }, ref ) => {
  const { date, typeOperation, category, comment, amount, itemBalance } = transaction;
  const currenrDate = moment(new Date(date)).format('DD.MM.YYYY');

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
    <StyledList style={{ borderLeft: typeOperation === 'income' ? '5px solid #24CCA7' : '5px solid#FF6596'}} >
      <li>Date <span>{currenrDate}</span></li>
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
