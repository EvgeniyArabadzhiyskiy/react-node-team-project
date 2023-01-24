import { HomeTabItem } from "./HomeTabItem";
import { CategoryName, StyledTable, StyledTableBody, StyledTableHeader } from "./HomeTab.styled";

const HomeTabDesctop = ({ transactions, balances, lastElement, getTransId
  //  handleClick, clear 
  }) => {

  return (
    <StyledTable>
      <StyledTableHeader>
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

          if (transactions.length === idx + 1) {
            return (
              <HomeTabItem
                key={transaction._id}
                ref={lastElement}

                getTransId={getTransId}
                // clear={clear}
                // handleClick={handleClick}

                transaction={{...transaction, itemBalance }}
              />
            )
          }

          return (
            <HomeTabItem
              key={transaction._id}

              getTransId={getTransId}
              // clear={clear}
              // handleClick={handleClick}

              transaction={{...transaction, itemBalance }}
            />
          )}
        )}
      </StyledTableBody>}
    </StyledTable>
  )
}
 
export default HomeTabDesctop;