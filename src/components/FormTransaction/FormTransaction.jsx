import './rdt-styles.css';
import moment from 'moment';
import Select from 'react-select';
import Datetime from 'react-datetime';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

// import { ReactComponent as Plus } from '../../images/plus.svg';
// import { ReactComponent as Minus } from '../../images/minus.svg';

import { modalClose } from 'redux/modal/modalSlice';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { optionsExpense, optionsIncome } from 'helpers/formAddTransaction/options';

import {
  // CheckBox,
  // CheckBoxLabel,
  // CheckBoxWrapper,
  // Switch,
  // TextExpense,
  // TextIncome,
  CommentWrapper,
  DateWrapper,
  ErrorAmount,
  ErrorComment,
  ImputsWrapper,
  InputComment,
  InputSum,
  LabelComment,
  LabelSum,
  Title,
  TransactionForm,
} from './FormTransaction.styled';
import DateInput from './DateInput';
import { selectStyles } from 'helpers/formAddTransaction/selectStyles';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';
import { checksFutureDate } from 'helpers/formAddTransaction/checksFutureDate';
import { useAddTransactionMutation } from 'redux/WalletApiServise/wallet-api';
import { ButtonAdd, ButtonCancel } from 'components/Buttons/Buttons.styled';
import SwithChecbox from 'components/SwithChecbox/SwithChecbox';

const FormTransaction = ({setIsIncome, isIncome}) => {
  const dispatch = useDispatch();
  const selectInputRef = useRef();

  const [isNextOperations, setIsNextOperations] = useState(true);
  const [addNewTransaction_RTKQ] = useAddTransactionMutation();

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
    dispatch(modalClose(false));
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

      dispatch(resetTransactions());
      dispatch(modalClose(false));

      toast.success("Successful transaction");
    }

  };

  return (
    <>
      <Title>Add transaction</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitFormTransaction}
        validationSchema={transactionShema}
      >
        {({ setFieldValue, values }) => (
         <TransactionForm>
            <ImputsWrapper>

              {/* <CheckBoxWrapper>
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
              </CheckBoxWrapper> */}

              <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

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

            <ButtonAdd type="submit">Add</ButtonAdd>
            <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
            
          </TransactionForm>
        )}
      </Formik> 
    </>
  );
};

export default FormTransaction;