import styled, { css } from 'styled-components';

export const CommonStyle = css`
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

export const StyledTableHeader = styled.div`
  ${CommonStyle}

  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.primaryBg};
  padding: 15px 20px;
  border-radius: 30px;
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

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 15px 0 20px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  overflow-y: scroll;
  max-height: 260px;
`;

export const StyledItem = styled.li`
  ${CommonStyle};

  height: 52px;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }

  p {
    &:nth-of-type(3) {
      padding-right: 32px;
    }
  }
`;

export const CategoryName = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;

export const StyledList = styled.ul`
  margin: 0;
  border-radius: 10px;
  background-color: #ffffff;

  line-height: 1.5;

  border-left: 5px solid
    ${p => (p.borders === 'income' ? '#24CCA7' : '#FF6596')};

  li {
    display: flex;
    justify-content: space-between;

    padding: 12px 20px;
    font-weight: ${p => p.theme.fontWeights.bold};

    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  li > span {
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;

export const StyledWrap = styled.ul`
  max-width: 280px;
  margin: auto;
  border-left: 5px;

  ul {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

//   export const StyledTableHeader = styled.div`
//   background-color: ${p => p.theme.colors.primaryBg};
//   font-weight: ${p => p.theme.fontWeights.bold};
//   font-size: ${p => p.theme.fontSizes.s};
//   line-height: 1.5;

//   padding: 15px 20px;
//   border-radius: 30px;

//   @media (min-width: 768px) {
//     display: flex;
//   }

//   p {
//     @media (min-width: 768px) {
//       margin: 0;
//       &:nth-child(1) {
//         width: 15%;
//       }
//       &:nth-child(2) {
//         width: 15%;
//         display: flex;
//         justify-content: center;
//       }
//       &:nth-child(3) {
//         width: 20%;
//       }
//       &:nth-child(4) {
//         width: 25%;
//       }
//       &:nth-child(5) {
//         width: 10%;
//         display: flex;
//         justify-content: flex-end;
//       }
//       &:nth-child(6) {
//         width: 15%;
//         display: flex;
//         justify-content: flex-end;
//       }
//     }
//   }
// `;

// export const StyledTableBody = styled.ul`
//   margin: 0;
//   padding: 0 15px 0 20px;
//   font-size: ${p => p.theme.fontSizes.s};
//   line-height: 1.5;

//   overflow-y: scroll;
//   height: 260px;

//   li {
//     align-items: center;
//     height: 52px;
//     &:not(:last-child) {
//       border-bottom: 1px solid #dcdcdf;
//     }
//     @media (min-width: 768px) {
//       display: flex;
//     }
//   }
//   li > p {
//     margin: 0;
//     line-height: 1.12;
//     @media (min-width: 768px) {
//       &:nth-child(1) {
//         width: 15%;
//       }
//       &:nth-child(2) {
//         width: 15%;
//         display: flex;
//         justify-content: center;
//       }
//       &:nth-child(3) {
//         width: 20%;
//       }
//       span {
//         display: block;
//         max-width: 106px;
//       }
//       &:nth-child(4) {
//         width: 25%;
//       }
//       &:nth-child(5) {
//         width: 10%;
//         font-weight: ${p => p.theme.fontWeights.bold};
//         display: flex;
//         justify-content: flex-end;
//       }
//       &:nth-child(6) {
//         width: 15%;
//         display: flex;
//         justify-content: flex-end;
//       }
//     }
//   }
// `;
