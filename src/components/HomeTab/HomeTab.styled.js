import styled from 'styled-components';

export const StyledTableHeader = styled.div`
  background-color: ${p => p.theme.colors.primaryBg};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  padding: 15px 20px;
  border-radius: 30px;

  @media (min-width: 768px) {
    display: flex;
  }

  p {
    @media (min-width: 768px) {
      margin: 0;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
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

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 15px 0 20px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;

  overflow-y: scroll;
  height: 260px;

  li {
    align-items: center;
    height: 52px;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
  li > p {
    margin: 0;
    line-height: 1.12;
    @media (min-width: 768px) {
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      span {
        display: block;
        max-width: 106px;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        font-weight: ${p => p.theme.fontWeights.bold};
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  border-radius: 10px;
  background-color: #ffffff;
  li {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    padding: 12px 20px;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
    display: flex;
    justify-content: space-between;
  }
  li > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const StyledWrap = styled.div`
  max-width: 280px;
  margin: auto;
  border-left: 5px;

  ul {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const CategoryName = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;
