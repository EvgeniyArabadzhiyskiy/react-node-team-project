import styled from 'styled-components';
import EWalletBg from '../../images/desctop-webp.webp';
import EWalletBgTab from '../../images/tablet.jpg';
import EWalletBgMobile from '../../images/mobile.png';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 100vh;

  background: url(${EWalletBgMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background: url(${EWalletBgTab});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 1280px) {
    background: url(${EWalletBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.headingBold};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  color: ${p => p.theme.colors.primaryText};
`;
