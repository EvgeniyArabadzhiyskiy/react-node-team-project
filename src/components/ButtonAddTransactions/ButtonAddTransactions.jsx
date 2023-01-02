import { useDispatch } from 'react-redux';
import { toggleModalOverlay, toggleModalTransaction } from 'redux/transactions/transactionsSlice';

import { ReactComponent as Plus } from '../../images/plus.svg';
import { Button } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const onCancelClick = () => {
    dispatch(toggleModalOverlay(true));
    dispatch(toggleModalTransaction(true));
  };

  return (
    <Button type="button" onClick={onCancelClick}>
      <Plus />
    </Button>
  );
};

export default ButtonAddTransactions;
