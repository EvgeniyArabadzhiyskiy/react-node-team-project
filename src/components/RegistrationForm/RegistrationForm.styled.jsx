import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import {
  changeMainLineColor,
  changeAfterLineColor,
  changeAfterLineWidth,
} from 'helpers/passwordIndicators';
import { Link } from 'react-router-dom';

export const FormWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 36px;
  background-color: ${p => p.theme.colors.primaryBg};

  @media screen and (min-width: 768px) {
    width: 533px;
    padding: 40px 58px 40px 65px;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  margin-top: 60px;
`;

export const Input = styled(Field)`
  width: 240px;
  padding: 8px 20px;
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 24px;
  color: ${p => p.theme.colors.white};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-family: ${p => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
    color: ${p => p.theme.colors.secondaryText};
  }

  @media screen and (min-width: 768px) {
    width: 370px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};

  & + & {
    margin-top: 40px;
  }
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  bottom: -35px;
  padding: 4px 5px;
  color: #f21407;
  background-color: transparent;
`;

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

export const PasswordIndicator = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${p => changeMainLineColor(p.lenth)};

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: ${p => changeAfterLineWidth(p.lenth)};
    height: 4px;
    border-radius: 2px;
    background-color: ${p => changeAfterLineColor(p.lenth)};
  }
`;
