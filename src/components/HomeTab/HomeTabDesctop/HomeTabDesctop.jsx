import { memo } from "react";
import {GoSettings} from 'react-icons/go';
import HomeTabItem from "../HomeTabItem";
import { CategoryName, StyledTable, StyledTableBody, StyledTableHeader } from "./HomeTabDesctop.styled";

const HomeTabDesctop = memo(({ transactions, balances, lastElement }) => {

  return (
    <StyledTable>
      <StyledTableHeader>
        <CategoryName><GoSettings /></CategoryName>
        <CategoryName>Date</CategoryName>
        <CategoryName>Type</CategoryName>
        <CategoryName>Category</CategoryName>
        <CategoryName>Comment</CategoryName>
        <CategoryName>Sum</CategoryName>
        <CategoryName>Balance</CategoryName>
      </StyledTableHeader>

      { transactions.length > 0 && <StyledTableBody>
        {transactions.map((transaction, idx ) => {
          const itemBalance = balances[idx];
          const lastIndex = transactions.length === idx + 1

          return (
            <HomeTabItem
              key={transaction._id}
              lastElement={lastIndex ? lastElement : null}
              transaction={{...transaction, itemBalance }}
            />
          )}
        )}
      </StyledTableBody>}
    </StyledTable>
  )
})
 
export default HomeTabDesctop;