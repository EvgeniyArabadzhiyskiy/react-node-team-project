import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Modal, Overlay } from './Modal.styled';
import { modalClose } from 'redux/modal/modalSlice';

const modalRoot = document.querySelector('#modal-root');

const ModalAddTransaction = ({ children }) => {
  const dispatch = useDispatch();

  const onEscPress = e => {
    if (e.code === 'Escape') {
      dispatch(modalClose(false));
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
      dispatch(modalClose(false));
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
