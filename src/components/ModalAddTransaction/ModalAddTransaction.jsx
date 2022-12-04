import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModalAdd } from 'redux/transactions/transactionsSlice';
import { Modal, Overlay } from './ModalAddTransaction.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalAddTransaction = ({ children }) => {
  const dispatch = useDispatch();

  const onEscPress = e => {
    if (e.code === 'Escape') {
      dispatch(toggleModalAdd(false));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscPress);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener('keydown', onEscPress);
      document.body.style.overflow = "";
    };
  });

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalAdd(false));
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};

export default ModalAddTransaction;
