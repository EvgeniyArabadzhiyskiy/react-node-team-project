import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { modalClose } from 'redux/modal/modalSlice';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { useAddTransactionMutation } from 'redux/walletsApiServise/wallet-api';

import { Title } from './TransactionForm.styled';
import FormDefault from 'components/FormDefault';
import FormTransaction from 'components/FormTransaction';

import { onChangeType } from 'helpers/formAddTransaction/onChangeType';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';

const TransactionForm = ({setIsIncome, isIncome}) => {
  const dispatch = useDispatch();
  const [addNewTransaction_RTKQ] = useAddTransactionMutation();

  const initialValues = {
    comment: '',
    amount: '',
    category: '',
    date: new Date().toString(),
  };

  const handleSubmit = async (values, {resetForm}) => {
    const typeOperation = onChangeType(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };
    
    await addNewTransaction_RTKQ(transaction).unwrap();
    resetForm();

    dispatch(resetTransactions());
    dispatch(modalClose(false));

    toast.success("Successful transaction");
  };

  return (
    <>
      <Title>Add transaction</Title>

      <FormDefault 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={transactionShema}

        render={(props) => (
          <FormTransaction 
            formik={props}
            submitText="add"
            cancelText="cancel"
            isIncome={isIncome}
            setIsIncome={setIsIncome}
          />
        )}
      />
    </>
  );
};

export default TransactionForm;