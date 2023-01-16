import styled from 'styled-components';
import { Form, Field } from 'formik';
import {
  changeMainLineColor,
  changeAfterLineColor,
  changeAfterLineWidth,
} from 'helpers/passwordIndicators';

// export const FormWrap = styled.div`
//   width: 340px;
//   padding: 32px 20px 36px;
//   background-color: rgba(0, 0, 0, 0.7);
//   border: 10px solid rgba(255, 255, 255, 0.2);
//   background-clip: padding-box;

//   transform: scaleY(0);
//   transition: transform 400ms linear 100ms;
//   transform: ${p => (p.isScale ? 'scaleY(1)' : 'scaleY(0)')};

//   @media screen and (min-width: 768px) {
//     width: 530px;
//     margin-right: 50px;
//     padding: 40px 58px 40px 65px;
//   }
// `;

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
