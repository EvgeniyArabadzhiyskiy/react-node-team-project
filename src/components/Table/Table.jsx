import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getStatisticDate } from 'redux/statistic/statisticSlice';
import { getCategoryColor } from 'helpers/statistics/getCategoryColor';
import { useGetStatisticQuery } from 'redux/walletsApiServise/wallet-api';

import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledFilters,
  StyledItem,
  ColorSpan,
  StyledText,
} from './Table.styled';
import FilterDate from './FilterDate';


const Table = () => {
  const dispatch = useDispatch();
  
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const { data = [] } = useGetStatisticQuery({ month, year });

  useEffect(() => {
    dispatch(getStatisticDate({ month, year }));
  }, [dispatch, month, year]);

  const expensesData = data
    .filter(data => data.type !== 'income')  

  const expensesTotal = expensesData
    .reduce((total, data) => total + Number(data.totalSum), 0);

  const incomeTotal = data
    .filter(data => data.type === 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  return (  
    <StyledTable>
      <StyledFilters>
        <FilterDate setMonth={setMonth}  />
        <FilterDate  setYear={setYear} value={"Year"}/>
      </StyledFilters>
      
      <StyledTableHeader>
        <p>Category</p>
        <p>Sum</p>
      </StyledTableHeader>

      <StyledTableBody> 
        { expensesData.map(({ _id: color, totalSum }) => {
          return (
            <li key={color}>
              <StyledItem>
                <ColorSpan category={getCategoryColor(color)}/>
                {color}
              </StyledItem>
              <p>{totalSum}</p>
            </li>
          );
        })}            
      </StyledTableBody>

      <StyledTableFooter>
        <li>
          <p>Expenses:</p>
          <StyledText type="expense">{expensesTotal}</StyledText>
        </li>
        <li>
          <p>Income:</p>
          <StyledText type="income">{incomeTotal}</StyledText>
        </li>
      </StyledTableFooter>
    </StyledTable>
  );
};

export default Table;
