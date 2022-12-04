import { useDispatch } from 'react-redux';
import { toggleModalAdd } from 'redux/transactions/transactionsSlice';

import { ReactComponent as Plus } from '../../images/plus.svg';
import { Button } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModalAdd(true));
  };

  return (
    <Button type="button" onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default ButtonAddTransactions;
