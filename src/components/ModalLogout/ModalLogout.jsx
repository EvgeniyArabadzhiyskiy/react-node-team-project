import {
  Title,
  Wrapper,
  WrapperItem,
  Exit,
  Stay,
  Border,
  Modal,
} from './ModalLogout.styled';
import { useDispatch } from 'react-redux';
import Spinner from 'components/Spinner';
import {
  resetTransactions,
  toggleModalOverlay,
  toggleModalExit,
} from 'redux/transactions/transactionsSlice';
import { useUserLogoutMutation } from 'redux/WalletApiServise/wallet-api';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const [logout_RTKQ, { isLoading }] = useUserLogoutMutation();

  const onCancelClick = () => {
    dispatch(toggleModalOverlay(false));
    dispatch(toggleModalExit(false));
  };

  const logOut = async () => {
    await logout_RTKQ();
    await dispatch(resetTransactions());

    dispatch(toggleModalOverlay(false));
    dispatch(toggleModalExit(false));
  };

  return (
    <Border>
      {isLoading && <Spinner />}
      <Modal>
      <Title>Are you sure you want to sign out?</Title>
      <Wrapper>
        <WrapperItem>
          <Exit onClick={logOut}>Exit </Exit>
        </WrapperItem>
        <WrapperItem>
          <Stay onClick={onCancelClick}>Cancel</Stay>
        </WrapperItem>
      </Wrapper>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
