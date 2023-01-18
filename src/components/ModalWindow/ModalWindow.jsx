import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Modal, Overlay } from './ModalWindow.styled';
import { modalClose } from 'redux/modal/modalSlice';
import { modalAnimation } from 'helpers/animations/modalAnimation';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();

  const onEscPress = e => {
    if (e.code === 'Escape') {
      dispatch(modalClose(false));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscPress);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onEscPress);
      document.body.style.overflow = 'visible';
    };
  });

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(modalClose(false));
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick} {...modalAnimation} transition={{ duration: 0.3 }} >
      <Modal animate={{ scale: 0.95 }}>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};

export default ModalWindow;
