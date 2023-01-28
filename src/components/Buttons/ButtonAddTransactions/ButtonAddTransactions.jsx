import { useDispatch } from 'react-redux';
import { modalTransactionOpen, setModalKey } from 'redux/modal/modalSlice';

import { ReactComponent as Plus } from '../../../images/plus.svg';
import { Button } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalTransactionOpen(true));
    dispatch(setModalKey("ADD"));
  };

  return (
    <Button type="button" onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default ButtonAddTransactions;
