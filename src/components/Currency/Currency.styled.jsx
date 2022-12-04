import styled from 'styled-components';

export const CurrencyBox = styled.div`
  position: relative;
  width: 280px;
  height: 174px;
  background: ${p => p.theme.colors.houseStat};
  border-radius: 30px;
  color: ${p => p.theme.colors.primaryBtn};
  margin: 0 auto;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;

    margin-top: 0;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
  }
`;

export const PrivatTableList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  padding-top: 11px;
  padding-bottom: 12px;

  border-radius: 30px 30px 0 0;

  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.childrenStat};
  font-size: ${p => p.theme.fontSizes.m};

  @media (min-width: 768px) {
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1280px) {
    padding-left: 45px;
    padding-right: 64px;

    padding-top: 17px;
    padding-bottom: 17px;
  }
`;

export const CurrencyList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  @media (min-width: 1280px) {
    padding-top: 20px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 12px;

  @media (min-width: 1280px) {
    padding-bottom: 24px;
  }
`;

export const ImageVektor = styled.img`
  position: absolute;

  height: 93px;
  width: 100%;

  bottom: 0;
  left: 0;
  @media (min-width: 768px) {
    height: 119px;
  }
  @media (min-width: 1280px) {
    height: 134px;
  }
`;

export const TextTitle = styled.p`
  color: white;
  @media (min-width: 768px) {
    &:nth-child(2) {
      margin-right: 35px;
    }
  }
  @media (min-width: 1280px) {
    &:nth-child(2) {
      margin-right: 15px;
    }
  }
`;

export const Text = styled.p`
  color: #ffffff;
  @media (max-width: 767px) {
    &:nth-child(1) {
      margin-left: 5px;
    }
    &:nth-child(2) {
      margin-left: 20px;
    }
    &:nth-child(3) {
      margin-right: 5px;
    }
  }
`;
