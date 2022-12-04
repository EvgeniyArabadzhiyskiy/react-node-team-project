import styled from 'styled-components';
import { Field } from 'formik';

export const StyledStatisticWraper = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledFilters = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 0;
  border-radius: 30px;
  @media (min-width: 768px) {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    padding: 0 0 15px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
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

export const CheckBoxLabel = styled.label`
  background-color: ${p => p.theme.colors.primaryBg};
  position: relative;
  height: 50px;
  border: 1px solid ${p => p.theme.colors.primaryText};
  border-radius: 30px;
  margin-bottom: 20px;
  width: 280px;
  @media screen and (max-width: 767px) {
    width: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
  }
`;

export const CheckBox = styled(Field)`
  width: 20px;
  height: 20px;
  visibility: hidden;
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.primaryBg};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  border-radius: 30px;
  height: 58px;
  color: ${p => p.theme.colors.primaryText};
  @media (min-width: 768px) {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
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
  margin: 0 auto;
  max-width: 336px;
  @media (min-width: 768px) {
    margin: 0 20px;
    width: 336px;
  }
  @media (min-width: 1024px) {
    margin: 0 16px 0 32px;
    width: 395px;
  }
`;

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 20px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    border-bottom: 1px solid #dcdcdf;
  }
  li > p {
    margin: 0;
    @media (min-width: 768px) {
      &:nth-child(1) {
        width: 40%;
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
  li > p > span {
    color: ${p => p.theme.colors.primaryText};
  }
`;

export const StyledTableFooter = styled.ul`
  margin: 0;
  border-radius: 10px;
  li {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 20px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
  li > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
  li > p {
    color: ${p => p.theme.colors.primaryText};
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  border-radius: 10px;
  li {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    padding: 12px 20px;

    border-bottom: 1px solid #dcdcdf;

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

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${p => p.theme.colors.primaryText};
`;
export const StyledInnerSpan = styled.div`
  display: block;
  width: '24px';
  height: '24px';
  margin-right: '10px';
  background-color: ${p => p.category};
`;
