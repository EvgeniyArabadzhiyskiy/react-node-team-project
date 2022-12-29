import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
import { baseBtnStyle } from 'components/RegistrationForm/RegistrationForm.styled';

export const FormWrapper = styled.div`
/* padding-top: 50px; */
  /* padding-top: ${p => p.theme.space[4]}px; */
  /* padding-bottom: ${p => p.theme.space[7]}px;  */
  /* width: 320px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.primaryBg}; */

  /* height: 580px; */
  /* perspective: 800px; */

  @media screen and (min-width: 768px) {
    /* padding-top: 36px; */
    /* padding-bottom: ${p => p.theme.space[6]}px; */
    /* width: 540px; */

    /* height: 580px; */
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: 24px;
  line-height: 35px;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: white;
  text-align: center;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 45px;
  }
`;

export const ImputsWrapper = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    padding-left: 73px;
    padding-right: 73px;
  }
`;



export const TransactionForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[7]}px;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: 24px;
  font-weight: 600;
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
`;

export const CheckBox = styled(Field)`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  visibility: hidden;
`;

export const Switch = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -2px;
  left: -2px;

  width: 44px;
  height: 44px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.expense};
  transition: transform 300ms linear;

  background-color: ${prop => (prop.isChecked ? '#24CCA7' : '#FF6596')};
  transform: ${prop => (prop.isChecked ? 'translateX(0)' : 'translateX(40px)')};
`;

export const TextIncome = styled.p`
  color: ${prop => (prop.isChecked ? '#24CCA7' : '#e0e0e0')};
`;

export const TextExpense = styled.p`
  color: ${prop => (prop.isChecked ? '#e0e0e0' : '#ff6596')};
`;

export const DateWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    column-gap: 30px;
    width: 100%;

    margin-top: ${p => p.theme.space[7]}px;
  }
`;

export const LabelSum = styled.label`
  display: block;
  width: 100%;
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[7]}px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: ${p => p.theme.space[0]}px;
  }
`;

export const InputSum = styled(Field)`
  width: 100%;
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  color: white;

  &::placeholder{
    color: #ffffff8f;
  }

`;

export const LabelComment = styled.label`
  display: block;
  width: 100%;
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[7]}px;
`;

export const InputComment = styled(Field)`
  width: 100%;
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  color: white;

  &::placeholder{
    color: #ffffff8f;
  }
`;

export const ButtonAdd = styled.button`
  ${baseBtnStyle}

  color: ${p => p.theme.colors.primaryBg};
  border: 7px solid rgba(55, 53, 53, 0.2);
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.primaryBgBtn};

  

  &:hover {
    /* background-color: ${p => p.theme.colors.hoverBgBtn}; */
    border: 7px solid ${p => p.theme.colors.primaryBgBtn};
  }

  transition: border 200ms linear;
`;

export const ButtonCancel = styled.button`
  ${baseBtnStyle}

  color: ${p => p.theme.colors.secondaryBtn};
  border: 7px solid rgba(55, 53, 53, 0.4);
  /* border: 1px solid ${p => p.theme.colors.secondaryBtn}; */

  &:hover {
    color: ${p => p.theme.colors.primaryBgBtn};
    border: 1px solid ${p => p.theme.colors.primaryBgBtn};
  }

  transition: all 300ms linear;
`;

export const ErrorAmount = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 2px;
  font-size: 14px;
  color: red;
`;

export const ErrorComment = ErrorAmount;

export const CommentWrapper = styled.div`
  position: relative;
`;
