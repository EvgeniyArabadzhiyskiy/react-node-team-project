import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: 24px;
  line-height: 35px;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  text-align: center;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 45px;
  }
`;

export const DateWrapper = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    column-gap: 30px;
    width: 100%;
  }
`;

export const SumWrapper = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    margin: ${p => p.theme.space[0]}px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 2px;

  font-size: 14px;
  letter-spacing: 0.05em;
  white-space: nowrap;

  color: #29ffd0;
`;

// export const ImputsWrapper = styled.div`
//   padding-left: ${p => p.theme.space[4]}px;
//   padding-right: ${p => p.theme.space[4]}px;

//   @media screen and (min-width: 768px) {
//     padding-left: 73px;
//     padding-right: 73px;
//   }
// `;

// export const TransactionForm = styled(Form)`
//   display: inline-flex;
//   flex-direction: column;
//   width: 100%;
// `;

// export const LabelSum = styled.label`
//   position : relative;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};

//   /* display: block; */
//   /* margin-top: ${p => p.theme.space[5]}px;
//   margin-bottom: ${p => p.theme.space[5]}px; */

//   /* @media screen and (min-width: 768px) {
//     width: 50%;
//     margin: ${p => p.theme.space[0]}px;
//   } */
// `;

// export const InputSum = styled(Field)`
//   width: 100%;
//   padding: 5px 20px;
//   background-color: inherit;
//   border: ${p => p.theme.borders.none};
//   outline: none;
//   color: ${p => p.theme.colors.white};

//   &::placeholder {
//     color: ${p => p.theme.colors.secondaryText};
//   }

// `;

// export const LabelComment = styled.label`
//   position : relative;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};

//   /* display: block; */
//   /* margin-top: ${p => p.theme.space[5]}px;
//   margin-bottom: ${p => p.theme.space[5]}px; */

// `;

// export const InputComment = styled(Field)`
//   width: 100%;

//   padding: 5px 20px;
//   outline: none;
//   border: ${p => p.theme.borders.none};
//   background-color: inherit;
//   color: ${p => p.theme.colors.white};

//   &::placeholder {
//     color: ${p => p.theme.colors.secondaryText};
//   }
// `;
