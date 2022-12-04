import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const FormWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 36px;
  background-color: ${p => p.theme.colors.primaryBg};

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
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

export const Input = styled(Field)`
  width: 240px;
  padding: 8px 20px;
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryText};
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

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  bottom: -35px;
  padding: 4px 5px;
  color: #f21407;
  background-color: transparent;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${p => p.theme.colors.primaryBgBtn};
  border-radius: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  letter-spacing: 0.1em;
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

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${p => p.theme.colors.secondaryBtn};
  border-radius: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: ${p => p.theme.colors.primaryBtn};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryBtn};
    color: ${p => p.theme.colors.primaryBtn};
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
