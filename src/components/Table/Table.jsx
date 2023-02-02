import { useMedia } from 'react-use';
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
  StyledInnerSpan,
} from './Table.styled';
import FilterDate from './FilterDate';


const Table = () => {
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 767px)');
  
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const { data = [] } = useGetStatisticQuery({ month, year },{
    refetchOnMountOrArgChange: year || month,
  });

  useEffect(() => {
    dispatch(getStatisticDate({ month, year }));
  }, [dispatch, month, year]);

  const incomeTotal = data
    .filter(data => data.type === 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  const expensesTotal = data
    .filter(data => data.type !== 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  return (
    <>
      {isMobile ? (
        <StyledTable>
          <div>
            <StyledFilters>
              <FilterDate setMonth={setMonth}  />
              <FilterDate  setYear={setYear} value={"Year"}/>
            </StyledFilters>
          </div>
          <StyledTableHeader>
            <p>Category</p>
            <p>Sum</p>
          </StyledTableHeader>
          <StyledTableBody> 
              {data.map(({ _id, type, totalSum }) => {
                if (type === 'expense') {
                  return (
                    <li key={_id}>
                      <StyledItem>
                        <StyledInnerSpan
                          category={getCategoryColor(_id)}
                          style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '10px',
                          }}
                        ></StyledInnerSpan>
                        <p>{_id}</p>
                      </StyledItem>
                      <p>
                        <span>{totalSum}</span>
                      </p>
                    </li>
                  );
                }
                return null;
              })}            
          </StyledTableBody>
          <StyledTableFooter>
            <li>
              <p>Expenses:</p>
              <p style={{ color: '#FF6596' }}>{expensesTotal}</p>
            </li>
            <li>
              <p>Income:</p>
              <p style={{ color: '#24CCA7' }}>{incomeTotal}</p>
            </li>
          </StyledTableFooter>
        </StyledTable>
      ) : (
        <StyledTable>
          <div>
            <StyledFilters>
              <FilterDate setMonth={setMonth}  />
              <FilterDate  setYear={setYear} value={"Year"}/> 
            </StyledFilters>
          </div>
          <StyledTableHeader>
            <p>Category</p>
            <p>Sum</p>
          </StyledTableHeader>

          <StyledTableBody>
              {data.map(({ _id, type, totalSum }) => {
                if (type === 'expense') {
                  return (
                    <li key={_id}>
                      <StyledItem>
                        <StyledInnerSpan
                          category={getCategoryColor(_id)}
                          style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '10px',
                          }}
                        ></StyledInnerSpan>
                        <p>{_id}</p>
                      </StyledItem>
                      <p>
                        <span>{totalSum}</span>
                      </p>
                    </li>
                  );
                }
                return null;
              })}
          </StyledTableBody>
          <StyledTableFooter>
            <li>
              <p>Expenses:</p>
              <p style={{ color: '#FF6596' }}>{expensesTotal}</p>
            </li>
            <li>
              <p>Income:</p>
              <p style={{ color: '#24CCA7' }}>{incomeTotal}</p>
            </li>
          </StyledTableFooter>
        </StyledTable>
      )}
    </>
  );
};

export default Table;
