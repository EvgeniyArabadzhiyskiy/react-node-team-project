import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.primaryBg};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 480px;
    padding: 15px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondaryText};
`;

export const ButtonExit = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  color: ${p => p.theme.colors.secondaryText};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};

  padding-right: 0;

  @media (max-width: 767px) {
    padding-left: 8px;
  }

  @media (min-width: 768px) {
    padding-left: 12px;
    margin-left: 12px;
    border-left: 1px solid #bdbdbd;
  }

  &:hover {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15)
  }
  &:focus {
     box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15)
  }
`;

export const Text = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
  margin-left: 8px;
`;

export const TextName = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: 8px;
`;
