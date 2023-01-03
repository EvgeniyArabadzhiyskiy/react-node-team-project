import styled from 'styled-components';
import EwalletBg2 from '../../images/ewallet-2.jpg'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${EwalletBg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 6;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
