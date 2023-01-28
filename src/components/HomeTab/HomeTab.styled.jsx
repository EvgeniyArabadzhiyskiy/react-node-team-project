import styled, { css } from 'styled-components';

export const CommonStyle = css`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  display: grid;
  grid-template-columns: 15% 15% 20% 20% 10% 15% 5%;
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
  position: relative;
  overflow: hidden;

  height: 52px;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }

  /* &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ae6d6d57;

    transform: translateX(100%);

    transition: transform 300ms linear;

    transform: ${p => p.isOpenMenu && 'translateX(0%)'} 
    
  } */

  /* &:hover::before{
    transform: ${p => p.isOpenMenu && 'translateX(0%)'} 
    
  } */

  p {
    &:nth-of-type(3) {
      padding-right: 32px;
    }
  }
`;

export const ContextMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d3a3a92;

  display: flex;
  justify-content: space-around;
  align-items: center;

  transform: translateX(100%);
  transition: transform 300ms linear;
  transform: ${p => p.isOpenMenu && 'translateX(0%)'};

  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #5009d2fc;

    transform: translateX(0%);

    transition: ${p => !p.isDelete && 'transform 6000ms linear'}  ;

    transform: ${p => p.isDelete && 'translateX(100%)'} 
    
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
