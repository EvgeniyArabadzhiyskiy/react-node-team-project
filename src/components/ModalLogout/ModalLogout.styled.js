import { ButtonAdd } from 'components/Buttons/Buttons.styled';
import styled from 'styled-components';

export const Border = styled.div`
  border: 10px solid rgba(255, 255, 255, 0.2);
`;

export const Modal = styled.div`
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;

  @media screen and (min-width: 767px) {
    width: 550px;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  line-height: 1.2;
  margin-bottom: 30px;
  text-align: center;

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

export const ButtonExit = styled(ButtonAdd)``;
