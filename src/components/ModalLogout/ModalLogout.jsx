import {
  Overlay,
  Modal,
  ModalTitle,
  Wrapper,
  WrapperItem,
  Exit,
  Stay,
} from './ModalLogout.styled';
import { enablePageScroll } from 'scroll-lock';
import { useEffect } from 'react';
// import { userLogout } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import Spinner from 'components/Spinner';
import { resetTransactions } from 'redux/transactions/transactionsSlice';
import { useUserLogoutMutation } from 'redux/WalletApiServise/wallet-api';

const ModalLogout = ({ openExitModal, setIsOpenExitModal }) => {
  const dispatch = useDispatch();
  const [logout_RTKQ, { isLoading }] = useUserLogoutMutation();

  useEffect(() => {
    document.addEventListener('keydown', closeModalEsc);

    return function () {
      document.removeEventListener('keydown', closeModalEsc);
    };
  });

  function closeModalEsc(e) {
    if (e.key === 'Escape') {
      setIsOpenExitModal(false);
    }
  }

  const disableScrollOn = () => {
    enablePageScroll();
    setIsOpenExitModal(false);
  };

  const logOut = async () => {
    // await  dispatch(userLogout());

    await logout_RTKQ()
    await  dispatch(resetTransactions())

    enablePageScroll();
    setIsOpenExitModal(false);
  };

  return (
    <Overlay onClick={disableScrollOn} opened={openExitModal}>
      <Modal onClick={e => e.stopPropagation()} opened={openExitModal}>
        {isLoading && <Spinner />}
        <ModalTitle>Are you sure you want to sign out?</ModalTitle>
        <Wrapper>
          <WrapperItem>
            <Exit onClick={logOut}>Exit </Exit>
          </WrapperItem>
          <WrapperItem>
            <Stay onClick={disableScrollOn}>Cancel</Stay>
          </WrapperItem>
        </Wrapper>
      </Modal>
    </Overlay>
  );
};

export default ModalLogout;
