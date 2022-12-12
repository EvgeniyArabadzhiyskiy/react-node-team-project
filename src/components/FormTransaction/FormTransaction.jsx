import './rdt-styles.css';
import moment from 'moment';
import Select from 'react-select';
import { Formik } from 'formik';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';

import { useDispatch,
  //  useSelector 
  } from 'react-redux';
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
// import { addNewTransaction, getAllTransactions } from 'redux/transactions/transactionOperations';
import { Box } from 'components/Box';
import { useState } from 'react';
import { useRef } from 'react';
import DateInput from './DateInput';
import { useAddTransactMutation } from 'redux/WalletApiServise/wallet-api';

const FormTransaction = ({setAllTrans, setPage}) => {
  const dispatch = useDispatch();
  const selectInputRef = useRef();

  const [isIncome, setIsIncome] = useState(false);
  const [isNextOperations, setIsNextOperations] = useState(true)
  const [addNewTransaction_RTK] =  useAddTransactMutation()


  const currentDate = moment().format('DD.MM.YYYY');

  const onChangeSwitch = e => {
    setIsIncome(e.target.checked)
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
      setIsNextOperations(false)
      
      
      await addNewTransaction_RTK(transaction).unwrap()
      resetForm()

      await dispatch(resetTransactions());
     
      
      // await dispatch(addNewTransaction(transaction));
      // resetForm()

      // if (pageNum === 1) await dispatch(getAllTransactions(1));

      dispatch(toggleModalAdd(false));

      toast.success("Successful transaction")
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
                  // isClearable
                  // isSearchable
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
                  />
                </LabelComment>
                <ErrorComment component="div" name="comment" />
              </CommentWrapper>
            </ImputsWrapper>

            <Box width="300px" margin="0 auto">
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
