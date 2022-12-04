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

export const Blur = styled.div`
  @media screen and (max-width: 767px) {
    min-height: 100vh;
    background-color: ${p => p.theme.colors.secondaryBg};
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
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const TabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideBar = styled.div`
  padding-top: 46px;
`;

export const Separator = styled.div`
  min-height: 100vh;
  margin: 0 69px;
  border: ${p => p.theme.borders.normal} #e7e5f2;
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
    1px 0px 0px rgba(255, 255, 255, 0.6);
`;
