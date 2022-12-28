import styled from 'styled-components';
import EllipseRed from '../../images/EllipseRed.png';
import EllipseViolet from '../../images/EllipseViolet.png';
import EWalletBg from '../../images/wallet-full.jpg';

export const Section = styled.section`
  /* @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    background-color: ${p => p.theme.colors.loginPageBg};
    background-image: url(${EllipseViolet}), url(${EllipseRed});
    background-position: 0 100%, 100% 0;
    background-repeat: no-repeat;
  } */
`;

export const Blur = styled.div`
  /* min-height: 100vh;
  backdrop-filter: blur(50px); */
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
  

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
    padding: 38px 0;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    background: url(${EWalletBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Frame = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 250px;
    width: 250px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    /* margin-bottom: 32px; */
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* margin-bottom: 50px; */
  }
  @media screen and (min-width: 1280px) {
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    /* width: 436px; */
    width: 650px;

    height: 100vh;
    background-color: tomato;
    background: url(${EWalletBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
export const FormContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: auto;
    height: 100vh;
    /* height: 800px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* backdrop-filter: blur(50px); */
    /* background-color: ${p => p.theme.colors.secondaryBg}; */
    /* padding: 52px 91px 52px 107px; */
  }
`;
