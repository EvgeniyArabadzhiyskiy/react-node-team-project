import * as Yup from 'yup';

const valueAfterComma = (val) => {
  const idxComma = String(val).indexOf('.')
  const isTwoDigits = String(val).length - idxComma < 4 

  if (idxComma === -1) {
    return true
  }
  
  return isTwoDigits
}

export const transactionShema = Yup.object().shape({
  category: Yup.string(),
  amount: Yup.number()
    .typeError('You need to enter a number')
    .positive('Only positive value')
    .test(
      'is-decimal',
      'Maximum two digits after comma',
      value => valueAfterComma(value)
    )
    .required('This field is required'),

  comment: Yup.string()
    .min(2, 'Must be longer than 2 letters')
    .max(20, 'Must be shorter than 20 letters')
    .required('This field is required'),
});
