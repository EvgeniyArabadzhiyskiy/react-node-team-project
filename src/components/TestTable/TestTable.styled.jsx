import styled, { css } from 'styled-components';

export const CommonStyle = css`
  background-color: ${p => p.theme.colors.primaryBg};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  display: grid;
  grid-template-columns: 15% 15% 20% 25% 10% 15%;
  align-items: center;

  p {
    &:nth-of-type(2) {
      text-align: center;
    }

    &:nth-of-type(5) {
      text-align: end;
    }

    &:nth-of-type(6) {
      text-align: end;
    }
  }
`;

export const StyledTable = styled.div`
  margin-top: 46px;

  @media (max-width: 1279px) {
    width: 704px;
  }
  
  @media (min-width: 1280px) {
    width: 715px;
  }
`;

export const StyledTableHead = styled.div`
  ${CommonStyle}
  padding: 15px 20px;
  border-radius: 30px;
`;

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 15px 0 20px;
  background: transparent;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  overflow-y: scroll;
  max-height: 260px;
`;

export const StyledItem = styled.li`
  ${CommonStyle};

  height: 52px;
  background: transparent;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;
