import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

export const baseBtnStyle = css`
  display: block;
  height: 50px;
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;

  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};

  line-height: 1.5;
  letter-spacing: ${p => p.theme.letterSpacings.body};
  cursor: pointer;
  text-transform: uppercase;

  @media ${p => p.theme.media.medium}  {
    width: 300px;
  }
`;

export const StyledLink = styled(Link)`
  ${baseBtnStyle}

  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #15275160;
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: ${p => p.theme.colors.primaryBtn};
  border-bottom: 5px solid #15275160;
  transition: all 150ms linear;

  :hover,
  :focus {
    border-color: #31a1cd;
    border-bottom: 1px solid #3187cd;
    color: #3187cd;
  }
`;

export const GoogleLink = styled(StyledLink)`
  span {
    margin-top: 5px;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const scale = keyframes`
    0% {
      border: 7px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(0.6);
      opacity: 1; */
    }
    50% {
      border: 1px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(1);
      opacity: 0.7; */
    }
    100% {
      border: 7px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(0.6);
      opacity: 1; */
    }
`;
