import {
  Title,
  Wrapper,
  WrapperItem,
  Exit,
  Stay,
  Border,
  Modal,
  ButtonExit,
} from './ModalLogout.styled';
import { useDispatch } from 'react-redux';
import Spinner from 'components/Spinner';

import { modalClose } from 'redux/modal/modalSlice';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { useUserLogoutMutation } from 'redux/WalletApiServise/wallet-api';
import { ButtonCancel } from 'components/Buttons/Buttons.styled';

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
        <Wrapper>
          {/* <WrapperItem> */}
            <ButtonExit onClick={logOut}>Exit </ButtonExit>
          {/* </WrapperItem> */}
          {/* <WrapperItem> */}
            <ButtonCancel onClick={onCancelClick}>Cancel</ButtonCancel>
          {/* </WrapperItem> */}
        </Wrapper>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
