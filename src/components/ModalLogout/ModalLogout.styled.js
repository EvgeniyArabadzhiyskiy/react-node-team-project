import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  opacity: ${props => (props.opened ? 1 : 0)};
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
  overflow: hidden;
`;

export const Modal = styled.div`
  width: 528px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: visible;
  opacity: 1;
  background-color: ${p => p.theme.colors.primaryBg};
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 80px 100px;
  transform: ${props =>
    props.opened
      ? 'translate(-50%, -50%) scale(1)'
      : 'translate(50%, 50%) scale(1)'};
  transition: transform 0.3s ease-out;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 550px;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${p => p.theme.borders.none};
    padding: 30px 0;
    border-radius: 0;
  }
`;

export const ModalTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.2;
  margin-bottom: 30px;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    white-space: normal;
  }
  svg {
    cursor: pointer;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperItem = styled.li`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.2;
    padding: 12px 5px;
    border-radius: 20px;
    border: 0;
    text-transform: uppercase;
    cursor: pointer;

    color: ${p => p.theme.colors.primaryBtn};
  }
`;

export const Exit = styled.button`
  background-color: ${p => p.theme.colors.expense};
  margin-bottom: 20px;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryBtn};
    color: ${p => p.theme.colors.primaryBtn};
  }
`;

export const Stay = styled.button`
  background-color: ${p => p.theme.colors.primaryBgBtn};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryBtn};
    color: ${p => p.theme.colors.primaryBtn};
  }
`;
