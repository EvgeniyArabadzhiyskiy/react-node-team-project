import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

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
  align-items: center;
  /* width: 100%; */
  border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};
  
  
  padding-left: 10px;
  /* & + & {
    margin-top: 40px;
  } */
`;

export const Input = styled(Field)`
  /* width: 240px; */
  width: 100%;

  padding: 5px 20px;
  border: ${p => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${p => p.theme.colors.white};
  
  ::placeholder {
    color: ${p => p.theme.colors.secondaryText};
  }

  /* @media screen and (min-width: 768px) {
    width: 370px;
  } */
`;

// export const ErrorMsg = styled(ErrorMessage)`
//   position: absolute;
//   right: 0;
//   bottom: -35px;
//   padding: 4px 5px;
//   color: #29ffd0;
//   font-size: 14px;
//   background-color: transparent;
// `;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 2px;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: #29ffd0;
`;

export const EyesButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;







// export const Input = styled(Field)`
//   width: 240px;
//   padding: 8px 20px;
//   border: none;
//   font-family: ${p => p.theme.fonts.body};
//   font-style: normal;
//   font-weight: ${p => p.theme.fontWeights.normal};
//   font-size: ${p => p.theme.fontSizes.m};
//   line-height: 1.5;
//   color: ${p => p.theme.colors.primaryText};
//   background-color: transparent;
//   color: ${p => p.theme.colors.white};

//   &:focus {
//     outline: none;
//   }
//   ::placeholder {
//     font-family: ${p => p.theme.fonts.body};
//     font-style: normal;
//     font-weight: ${p => p.theme.fontWeights.normal};
//     font-size: ${p => p.theme.fontSizes.m};
//     line-height: 1.5;
//     color: ${p => p.theme.colors.secondaryText};
//   }

//   @media screen and (min-width: 768px) {
//     width: 370px;
//   }
// `;