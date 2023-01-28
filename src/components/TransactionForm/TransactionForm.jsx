import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { modalClose } from 'redux/modal/modalSlice';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { useAddTransactionMutation, useEditTransactionMutation } from 'redux/walletsApiServise/wallet-api';

import { Title } from './TransactionForm.styled';
import FormDefault from 'components/FormDefault';
import FormTransaction from 'components/FormTransaction';

import { onChangeType } from 'helpers/formAddTransaction/onChangeType';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';

const TransactionForm = ({setIsIncome, isIncome}) => {
  const dispatch = useDispatch();
  const { modalKey } = useSelector(state => state.modal)
  const { editId } = useSelector(state => state.transactions)
  const [addNewTransaction_RTKQ] = useAddTransactionMutation();
  const [editTransaction_RTKQ] = useEditTransactionMutation()

  const setTitle = (modalKey) => {
    switch (modalKey) {
      case "ADD":
        return "Add transaction";

      case "EDIT":
        return "Edit transaction";
    
      default:
        return;
    }
    
  }

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

    if (modalKey === "ADD") {
      await addNewTransaction_RTKQ(transaction).unwrap();
      resetForm();

      dispatch(resetTransactions());
      dispatch(modalClose(false));

      toast.success("Successful transaction"); 
    }

    if (modalKey === "EDIT") {
      // await addNewTransaction_RTKQ(transaction).unwrap();
      await editTransaction_RTKQ({id: editId, transaction})
      resetForm();

      // dispatch(resetTransactions());
      dispatch(modalClose(false));

      toast.success("Successful EDIT"); 
    }
    
    
  };

  return (
    <>
      <Title>{setTitle(modalKey)}</Title>

      <FormDefault 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={transactionShema}

        render={(props) => (
          <FormTransaction 
            formik={props}
            isIncome={isIncome}
            setIsIncome={setIsIncome}
          />
        )}
      />
    </>
  );
};

export default TransactionForm;