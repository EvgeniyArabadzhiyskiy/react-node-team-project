import { useDispatch } from 'react-redux';
import { modalTransactionOpen } from 'redux/modal/modalSlice';

import { ReactComponent as Plus } from '../../../images/plus.svg';
import { Button } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const onBtnAddClick = () => {
    dispatch(modalTransactionOpen(true));
  };

  return (
    <Button type="button" onClick={onBtnAddClick}>
      <Plus />
    </Button>
  );
};

export default ButtonAddTransactions;
