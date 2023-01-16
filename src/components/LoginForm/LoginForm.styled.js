import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrap = styled.div`
  width: 340px;
  padding: 32px 20px 36px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 10px solid rgba(255, 255, 255, 0.2);
  background-clip: padding-box;

  transform: scaleY(0);
  transition: transform 400ms linear 100ms;
  transform: ${p => (p.isScale ? 'scaleY(1)' : 'scaleY(0)')};

  @media screen and (min-width: 768px) {
    width: 530px;
    margin-right: 50px;
    padding: 40px 58px 40px 65px;
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
  color: ${p => p.theme.colors.white};

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
