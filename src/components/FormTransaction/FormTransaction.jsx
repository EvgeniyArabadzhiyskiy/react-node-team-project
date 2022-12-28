import './rdt-styles.css';
import moment from 'moment';
import Select from 'react-select';
import Datetime from 'react-datetime';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';

import { optionsExpense, optionsIncome } from 'helpers/formAddTransaction/options';
import { resetTransactions, toggleModalAdd } from 'redux/transactions/transactionsSlice';

import {
  ButtonAdd,
  ButtonCancel,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  CommentWrapper,
  DateWrapper,
  ErrorAmount,
  ErrorComment,
  FormWrapper,
  ImputsWrapper,
  InputComment,
  InputSum,
  LabelComment,
  LabelSum,
  Switch,
  TextExpense,
  TextIncome,
  Title,
  TransactionForm,
} from './FormTransaction.styled';
import { selectStyles } from 'helpers/formAddTransaction/selectStyles';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';
import { checksFutureDate } from 'helpers/formAddTransaction/checksFutureDate';
import { Box } from 'components/Box';
import DateInput from './DateInput';
import { useAddTransactMutation } from 'redux/WalletApiServise/wallet-api';

const FormTransaction = ({setIsIncome, isIncome}) => {
  const dispatch = useDispatch();
  const selectInputRef = useRef();

  const [isNextOperations, setIsNextOperations] = useState(true);
  const [addNewTransaction_RTKQ] = useAddTransactMutation();

  const currentDate = moment().format('DD.MM.YYYY');

  const onChangeSwitch = e => {
    setIsIncome(e.target.checked);
    selectInputRef.current.clearValue();
   
    
  };

  const onChangeType = value => {
    switch (value) {
      case true:
        return 'income';

      case false:
        return 'expense';

      default:
        console.log('No such operation');
    }
  };

  const onCancelClick = () => {
    dispatch(toggleModalAdd(false));
  };

  const initialValues = {
    comment: '',
    amount: '',
    category: '',
    date: new Date().toString(),
  };

  const onSubmitFormTransaction = async (values, {resetForm}) => {
    const typeOperation = onChangeType(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };
    
    if (isNextOperations) {
      setIsNextOperations(false);
      
      
      await addNewTransaction_RTKQ(transaction).unwrap();
      resetForm();

      await dispatch(resetTransactions());
     
      dispatch(toggleModalAdd(false));

      toast.success("Successful transaction");
    }

   

  };

  return (
    <FormWrapper>
      <Title>Add transaction</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitFormTransaction}
        validationSchema={transactionShema}
      >
        {({ setFieldValue, values }) => (
         <TransactionForm>
            <ImputsWrapper>
              <CheckBoxWrapper>
                <TextIncome isChecked={isIncome}>Income</TextIncome>

                <CheckBoxLabel>
                  <CheckBox
                    type="checkbox"
                    name="typeOperation"
                    role="switch"
                    checked={isIncome}
                    onChange={onChangeSwitch}
                  />

                  <Switch 
                    isChecked={isIncome}>
                    {isIncome ? <Plus /> : <Minus />}
                  </Switch>
                </CheckBoxLabel>

                <TextExpense isChecked={isIncome}>Expense</TextExpense>
              </CheckBoxWrapper>

                <Select
                  ref={selectInputRef}
                  name="category"
                  options={ isIncome ? optionsIncome : optionsExpense}
                  placeholder="Select a category"
                  onChange={data => setFieldValue('category', data?.label)}
                  styles={selectStyles}
                />

              <DateWrapper>
                <LabelSum>
                  <InputSum
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    autoComplete="off"
                  />
                </LabelSum>
                <ErrorAmount component="div" name="amount" />

                <>
                  <Datetime
                    name="date"
                    closeOnSelect
                    initialValue={currentDate}
                    dateFormat="DD.MM.YYYY"
                    timeFormat={false}
                    isValidDate={checksFutureDate}
                    onChange={e => setFieldValue('date', new Date(e).toString())}
                    inputProps={{onKeyDown: e => e.preventDefault()}}
                    renderInput={(p, openCalendar) => (
                    <DateInput  props={p} onOpen={openCalendar}  />)}
                  />

                </>
              </DateWrapper>

              <CommentWrapper>
                <LabelComment>
                  <InputComment
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    autoComplete="off"
                  />
                </LabelComment>
                <ErrorComment component="div" name="comment" />
              </CommentWrapper>
            </ImputsWrapper>

            <Box width="280px" margin="0 auto">
              <ButtonAdd type="submit">Add</ButtonAdd>
              <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
            </Box>
          </TransactionForm>
        )}
      </Formik> 
     

    </FormWrapper>
  );
};

export default FormTransaction;










// import './rdt-styles.css';
// import moment from 'moment';
// import Select from 'react-select';
// import Datetime from 'react-datetime';
// import { Formik } from 'formik';
// import { toast } from 'react-toastify';
// import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';

// import { ReactComponent as Plus } from '../../images/plus.svg';
// import { ReactComponent as Minus } from '../../images/minus.svg';

// import { optionsExpense, optionsIncome } from 'helpers/formAddTransaction/options';
// import { resetTransactions, toggleModalAdd } from 'redux/transactions/transactionsSlice';

// import {
//   ButtonAdd,
//   ButtonCancel,
//   CardBack,
//   CardFront,
//   CheckBox,
//   CheckBoxLabel,
//   CheckBoxWrapper,
//   CommentWrapper,
//   DateWrapper,
//   ErrorAmount,
//   ErrorComment,
//   FormWrapper,
//   ImputsWrapper,
//   InnerCard,
//   InputComment,
//   InputSum,
//   LabelComment,
//   LabelSum,
//   Switch,
//   TextExpense,
//   TextIncome,
//   Title,
//   TransactionForm,
// } from './FormTransaction.styled';
// import { selectStyles } from 'helpers/formAddTransaction/selectStyles';
// import { transactionShema } from 'helpers/formAddTransaction/transactionShema';
// import { checksFutureDate } from 'helpers/formAddTransaction/checksFutureDate';
// import { Box } from 'components/Box';
// import DateInput from './DateInput';
// import { useAddTransactMutation } from 'redux/WalletApiServise/wallet-api';

// const FormTransaction = () => {
//   const dispatch = useDispatch();
//   const selectInputRef = useRef();

//   const [isIncome, setIsIncome] = useState(false);
//   const [isNextOperations, setIsNextOperations] = useState(true);
//   const [addNewTransaction_RTKQ] = useAddTransactMutation();


//   const currentDate = moment().format('DD.MM.YYYY');

//   // const [isFlipped, setIsFlipped] = useState(false)

//   const onChangeSwitch = e => {
//     setIsIncome(e.target.checked);
//     selectInputRef.current.clearValue();
//      console.log("FormTransaction  isIncome", isIncome);
    
//   };

//   const onChangeType = value => {
//     switch (value) {
//       case true:
//         return 'income';

//       case false:
//         return 'expense';

//       default:
//         console.log('No such operation');
//     }
//   };

//   const onCancelClick = () => {
//     dispatch(toggleModalAdd(false));
//   };

//   // const handleClick = () => {
//   //   setIsFlipped(prev => !prev)
//   // }

//   const initialValues = {
//     comment: '',
//     amount: '',
//     category: '',
//     date: new Date().toString(),
//   };

//   const onSubmitFormTransaction = async (values, {resetForm}) => {
//     const typeOperation = onChangeType(isIncome);

//     const transaction = {
//       ...values,
//       amount: Number(values.amount),
//       typeOperation,
//     };
    
//     if (isNextOperations) {
//       setIsNextOperations(false);
      
      
//       await addNewTransaction_RTKQ(transaction).unwrap();
//       resetForm();

//       await dispatch(resetTransactions());
     
      
//       // await dispatch(addNewTransaction(transaction));
//       // resetForm()

//       // if (pageNum === 1) await dispatch(getAllTransactions(1));

//       dispatch(toggleModalAdd(false));

//       toast.success("Successful transaction");
//     }

   

//   };

//   return (
//     <FormWrapper>
//       <InnerCard    isFlipped={isIncome}>
//       <CardFront>
//         <Title>Add transaction</Title>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmitFormTransaction}
//           validationSchema={transactionShema}
//         >
//           {({ setFieldValue, values }) => (
//            !isIncome &&  <TransactionForm>
//               <ImputsWrapper>
//                 <CheckBoxWrapper>
//                   <TextIncome isChecked={isIncome}>Income</TextIncome>

//                   <CheckBoxLabel>
//                     <CheckBox
//                       type="checkbox"
//                       name="typeOperation"
//                       role="switch"
//                       checked={isIncome}
//                       onChange={onChangeSwitch}
//                     />

//                     <Switch 
//                       isChecked={isIncome}>
//                       {isIncome ? <Plus /> : <Minus />}
//                     </Switch>
//                   </CheckBoxLabel>

//                   <TextExpense isChecked={isIncome}>Expense</TextExpense>
//                 </CheckBoxWrapper>

//                   <Select
//                     ref={selectInputRef}
//                     name="category"
//                     options={ isIncome ? optionsIncome : optionsExpense}
//                     // isClearable
//                     // isSearchable
//                     placeholder="Select a category"
//                     onChange={data => setFieldValue('category', data?.label)}
//                     styles={selectStyles}
//                   />

//                 <DateWrapper>
//                   <LabelSum>
//                     <InputSum
//                       type="number"
//                       name="amount"
//                       placeholder="0.00"
//                     />
//                   </LabelSum>
//                   <ErrorAmount component="div" name="amount" />

//                   <>
//                     <Datetime
//                       name="date"
//                       closeOnSelect
//                       initialValue={currentDate}
//                       dateFormat="DD.MM.YYYY"
//                       timeFormat={false}
//                       isValidDate={checksFutureDate}
//                       onChange={e => setFieldValue('date', new Date(e).toString())}
//                       inputProps={{onKeyDown: e => e.preventDefault()}}
//                       renderInput={(p, openCalendar) => (
//                       <DateInput  props={p} onOpen={openCalendar}  />)}
//                     />

//                   </>
//                 </DateWrapper>

//                 <CommentWrapper>
//                   <LabelComment>
//                     <InputComment
//                       type="text"
//                       name="comment"
//                       placeholder="Comment"
//                     />
//                   </LabelComment>
//                   <ErrorComment component="div" name="comment" />
//                 </CommentWrapper>
//               </ImputsWrapper>

//               <Box width="300px" margin="0 auto">
//                 <ButtonAdd type="submit">Add</ButtonAdd>
//                 <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
//               </Box>
//             </TransactionForm>
//           )}
//         </Formik>
//       </CardFront>
//        <CardBack>
//         <Title>Add transaction</Title>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmitFormTransaction}
//           validationSchema={transactionShema}
//         >
//           {({ setFieldValue, values }) => (
//             isIncome && <TransactionForm>
//               <ImputsWrapper>
//                 <CheckBoxWrapper>
//                   <TextIncome isChecked={isIncome}>Income</TextIncome>

//                   <CheckBoxLabel>
//                     <CheckBox
//                       type="checkbox"
//                       name="typeOperation"
//                       role="switch"
//                       checked={isIncome}
//                       onChange={onChangeSwitch}
//                     />

//                     <Switch 
//                       isChecked={isIncome}>
//                       {isIncome ? <Plus /> : <Minus />}
//                     </Switch>
//                   </CheckBoxLabel>

//                   <TextExpense isChecked={isIncome}>Expense</TextExpense>
//                 </CheckBoxWrapper>

//                   <Select
//                     ref={selectInputRef}
//                     name="category"
//                     options={ isIncome ? optionsIncome : optionsExpense}
//                     // isClearable
//                     // isSearchable
//                     placeholder="Select a category"
//                     onChange={data => setFieldValue('category', data?.label)}
//                     styles={selectStyles}
//                   />

//                 <DateWrapper>
//                   <LabelSum>
//                     <InputSum
//                       type="number"
//                       name="amount"
//                       placeholder="0.00"
//                     />
//                   </LabelSum>
//                   <ErrorAmount component="div" name="amount" />

//                   <>
//                     <Datetime
//                       name="date"
//                       closeOnSelect
//                       initialValue={currentDate}
//                       dateFormat="DD.MM.YYYY"
//                       timeFormat={false}
//                       isValidDate={checksFutureDate}
//                       onChange={e => setFieldValue('date', new Date(e).toString())}
//                       inputProps={{onKeyDown: e => e.preventDefault()}}
//                       renderInput={(p, openCalendar) => (
//                       <DateInput  props={p} onOpen={openCalendar}  />)}
//                     />

//                   </>
//                 </DateWrapper>

//                 <CommentWrapper>
//                   <LabelComment>
//                     <InputComment
//                       type="text"
//                       name="comment"
//                       placeholder="Comment"
//                     />
//                   </LabelComment>
//                   <ErrorComment component="div" name="comment" />
//                 </CommentWrapper>
//               </ImputsWrapper>

//               <Box width="300px" margin="0 auto">
//                 <ButtonAdd type="submit">Add</ButtonAdd>
//                 <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
//               </Box>
//             </TransactionForm>
//           )}
//         </Formik>
//       </CardBack>

//       {/* <Title>Add transaction</Title>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmitFormTransaction}
//         validationSchema={transactionShema}
//       >
//         {({ setFieldValue, values }) => (
//           <TransactionForm>
//             <ImputsWrapper>
//               <CheckBoxWrapper>
//                 <TextIncome isChecked={isIncome}>Income</TextIncome>

//                 <CheckBoxLabel>
//                   <CheckBox
//                     type="checkbox"
//                     name="typeOperation"
//                     role="switch"
//                     checked={isIncome}
//                     onChange={onChangeSwitch}
//                   />

//                   <Switch 
//                     isChecked={isIncome}>
//                     {isIncome ? <Plus /> : <Minus />}
//                   </Switch>
//                 </CheckBoxLabel>

//                 <TextExpense isChecked={isIncome}>Expense</TextExpense>
//               </CheckBoxWrapper>

//                 <Select
//                   ref={selectInputRef}
//                   name="category"
//                   options={ isIncome ? optionsIncome : optionsExpense}
//                   // isClearable
//                   // isSearchable
//                   placeholder="Select a category"
//                   onChange={data => setFieldValue('category', data?.label)}
//                   styles={selectStyles}
//                 />

//               <DateWrapper>
//                 <LabelSum>
//                   <InputSum
//                     type="number"
//                     name="amount"
//                     placeholder="0.00"
//                   />
//                 </LabelSum>
//                 <ErrorAmount component="div" name="amount" />

//                 <>
//                   <Datetime
//                     name="date"
//                     closeOnSelect
//                     initialValue={currentDate}
//                     dateFormat="DD.MM.YYYY"
//                     timeFormat={false}
//                     isValidDate={checksFutureDate}
//                     onChange={e => setFieldValue('date', new Date(e).toString())}
//                     inputProps={{onKeyDown: e => e.preventDefault()}}
//                     renderInput={(p, openCalendar) => (
//                     <DateInput  props={p} onOpen={openCalendar}  />)}
//                   />

//                 </>
//               </DateWrapper>

//               <CommentWrapper>
//                 <LabelComment>
//                   <InputComment
//                     type="text"
//                     name="comment"
//                     placeholder="Comment"
//                   />
//                 </LabelComment>
//                 <ErrorComment component="div" name="comment" />
//               </CommentWrapper>
//             </ImputsWrapper>

//             <Box width="300px" margin="0 auto">
//               <ButtonAdd type="submit">Add</ButtonAdd>
//               <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
//             </Box>
//           </TransactionForm>
//         )}
//       </Formik> */}
//       </InnerCard>

//     </FormWrapper>
//   );
// };

// export default FormTransaction;
