import { toast, Zoom } from 'react-toastify';

export const sendMsg = (isLong, value) => {
  if (isLong) {
    toast.success(
      <h1 style={{ fontSize: '24px', color: 'blue' }}>{`${isLong}: ${value}`}</h1>,
      {transition: Zoom, autoClose: 5000,}
    );
  }
};
