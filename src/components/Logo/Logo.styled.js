import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoBox = styled.div`
  font-family: ${p => p.theme.fonts.headingBold};
  font-size: ${p => p.theme.fontSizes.l};

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const LogoWallet = styled.img`
  margin-right: 16px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const LogoLink = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;

  &:hover {
    color: ${p => p.theme.colors.secondaryBtn};
  }
  &:focus {
    color: ${p => p.theme.colors.secondaryBtn};
  }
`;

export const LogoText = styled.span`
  color: ${p =>
    p.isLoginPage 
    ? p.theme.colors.white 
    : p.theme.colors.primaryText
  };
`;
