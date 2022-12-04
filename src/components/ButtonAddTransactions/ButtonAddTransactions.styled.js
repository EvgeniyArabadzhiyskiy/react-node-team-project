import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  border: none;
  background-color: #24cca7;
  cursor: pointer;
  z-index: 6;

  &:hover {
    background-color: ${p => p.theme.colors.hoverBgBtn};
    border: 1px solid ${p => p.theme.colors.primaryBgBtn};
  }

  transition: border 300ms linear;
`;
