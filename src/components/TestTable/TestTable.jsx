import { StyledItem, StyledTable, StyledTableBody, StyledTableHead } from './TestTable.styled';

const TestTable = () => {
  return (
    <StyledTable>
      <StyledTableHead>
        <p>Data</p><p>Type</p><p>Category</p><p>Comment</p><p>Sum</p><p>Balance</p>
      </StyledTableHead>

    <StyledTableBody>
      <StyledItem>
      <p>19.01.23</p>
      <p>+</p>
      <p>Food</p>
      <p>Apple</p>
      <p>300</p>
      <p>2500</p>
      </StyledItem>
      <StyledItem>
      <p>19.01.23</p>
      <p>-</p>
      <p>Main</p>
      <p>point</p>
      <p>120</p>
      <p>2180</p>
      </StyledItem>
      <StyledItem>
      <p>19.01.23</p>
      <p>-</p>
      <p>Auto</p>
      <p>Gas</p>
      <p>400</p>
      <p>1900</p>
      </StyledItem>

      <StyledItem>
      <p>19.01.23</p>
      <p>+</p>
      <p>Food</p>
      <p>Apple</p>
      <p>300</p>
      <p>2500</p>
      </StyledItem>
      <StyledItem>
      <p>19.01.23</p>
      <p>-</p>
      <p>Main</p>
      <p>point</p>
      <p>120</p>
      <p>2180</p>
      </StyledItem>
      <StyledItem>
      <p>19.01.23</p>
      <p>-</p>
      <p>Auto</p>
      <p>Gas</p>
      <p>400</p>
      <p>1900</p>
      </StyledItem>
      
    </StyledTableBody>
    </StyledTable>
  );
};

export default TestTable;
