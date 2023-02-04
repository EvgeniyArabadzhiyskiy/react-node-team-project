import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoBox = styled.div`
  font-family: ${p => p.theme.fonts.headingBold};
  font-size: ${p => p.theme.fontSizes.l};

  @media ${p => p.theme.media.small} {
    font-size: 23px;
  }
`;

export const LogoWallet = styled.img`
  margin-right: 16px;

  @media ${p => p.theme.media.medium} {
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
