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


// ДРУГОЙ ВАРИАНТ  Intersection Observer

// import {GoSettings} from 'react-icons/go';
// import { useDispatch, useSelector } from "react-redux";
// import { memo, useRef, useCallback, useEffect } from "react";

// import { getNextPage } from "redux/transactions/transactionsSlice";
// import HomeTabItem from "../HomeTabItem";
// import { CategoryName, StyledTable, StyledTableBody, StyledTableHeader } from "./HomeTabDesctop.styled";

// const HomeTabDesctop = memo(({ transactions, balances, lastElement }) => {
//   const dispatch = useDispatch()
//   const observerElem = useRef(null);  
//   const { hasNextPage } = useSelector(state => state.transactions);
  
//   const handleObserver = useCallback((entries) => {
//     if(entries[0].isIntersecting && hasNextPage) {
//       dispatch(getNextPage())
//     }
    
//   }, [dispatch, hasNextPage])

//   useEffect(() => {

//     const target = observerElem.current
//     const option = { threshold: 0}

//     const observer = new IntersectionObserver(handleObserver, option);
//     observer.observe(target)

//     return () => observer.unobserve(target)
//   }, [handleObserver])

//   return (
//     <StyledTable>
//       <StyledTableHeader>
//         <CategoryName><GoSettings /></CategoryName>
//         <CategoryName>Date</CategoryName>
//         <CategoryName>Type</CategoryName>
//         <CategoryName>Category</CategoryName>
//         <CategoryName>Comment</CategoryName>
//         <CategoryName>Sum</CategoryName>
//         <CategoryName>Balance</CategoryName>
//       </StyledTableHeader>

//       { true && <StyledTableBody>
//         {transactions.map((transaction, idx ) => {
//           const itemBalance = balances[idx];
//           const lastIndex = transactions.length === idx + 1

//           return (
//             <HomeTabItem
//               key={transaction._id}
//               lastElement={lastIndex ? lastElement : null}
//               transaction={{...transaction, itemBalance }}
//             />
//           )}
//         )}

//         <div ref={observerElem} style={{ height: "50px", background: "tomato" }} ></div>
//       </StyledTableBody>}
//     </StyledTable>
//   )
// })
 
// export default HomeTabDesctop;