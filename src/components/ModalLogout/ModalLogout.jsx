import { useDispatch } from 'react-redux';

import { modalClose } from 'redux/modal/modalSlice';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { useUserLogoutMutation } from 'redux/walletsApiServise/wallet-api';

import Spinner from 'components/Spinner';
import EnterButton from 'components/Buttons/EnterButton';
import CancelButton from 'components/Buttons/CancelButton';
import { Title, Border, Modal } from './ModalLogout.styled';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const [logout_RTKQ, { isLoading }] = useUserLogoutMutation();

  const onCancelClick = () => {
    dispatch(modalClose(false));
  };

  const logOut = async () => {
    await logout_RTKQ();

    dispatch(resetTransactions());
    dispatch(modalClose(false));
  };

  return (
    <Border>
      {isLoading && <Spinner />}
      <Modal>
        <Title>Are you sure you want to sign out?</Title>
        <div>
          <EnterButton enterText="exit" onClick={logOut} />
          <CancelButton cancelText="cancel" onClick={onCancelClick} />
        </div>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
