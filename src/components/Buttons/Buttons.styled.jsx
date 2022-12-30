import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
letter-spacing: 0.1em;
cursor: pointer;
text-transform: uppercase;

@media screen and (min-width: 768px) {
  width: 300px;
}
`;

export const SubmitBtn = styled.button`
${baseBtnStyle}

margin-top: 20px;
border: 1px solid ${p => p.theme.colors.primaryBgBtn};
color: ${p => p.theme.colors.primaryBtn};
background-color: ${p => p.theme.colors.primaryBgBtn};

:disabled {
  opacity: 0.5;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primaryBgBtn};
    color: ${p => p.theme.colors.primaryBtn};
    border: 1px solid ${p => p.theme.colors.primaryBgBtn};
  }
}

:hover,
:focus {
  background-color: ${p => p.theme.colors.primaryBtn};
  color: ${p => p.theme.colors.primaryBgBtn};
  border: 1px solid ${p => p.theme.colors.primaryBgBtn};
}
`;

export const StyledNavLink = styled(Link)`
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

export const GoogleLink = styled(StyledNavLink)`
span {
  margin-top: 5px;
}

svg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
`;

export const ButtonAdd = styled.button`
  ${baseBtnStyle}

  color: ${p => p.theme.colors.primaryBg};
  border: 7px solid rgba(55, 53, 53, 0.2);
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.primaryBgBtn};

  

  &:hover {
    border: 7px solid ${p => p.theme.colors.primaryBgBtn};
  }

  transition: border 200ms linear;
`;

export const ButtonCancel = styled.button`
  ${baseBtnStyle}

  color: ${p => p.theme.colors.secondaryBtn};
  border: 7px solid rgba(55, 53, 53, 0.4);

  &:hover {
    color: ${p => p.theme.colors.primaryBgBtn};
    border: 1px solid ${p => p.theme.colors.primaryBgBtn};
  }

  transition: all 300ms linear;
`;