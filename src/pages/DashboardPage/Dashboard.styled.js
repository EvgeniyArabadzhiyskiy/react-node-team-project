import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.loginPageBg};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: ${p => p.theme.colors.gradient}, url(${p => p.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 480px;
    padding: 12px 20px 0;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px 32px 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const DesctopWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SideBar = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;
    padding-right: 70px;
    border-right: 1px solid rgb(231, 229, 242);
  }
`;
