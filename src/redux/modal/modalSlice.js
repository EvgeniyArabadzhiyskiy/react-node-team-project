import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalTransaction: false,
  modalExit: false,

  modalKey: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    modalExitOpen: state => {
      state.isModalOpen = true;
      state.modalExit = true;
    },

    modalTransactionOpen: state => {
      state.isModalOpen = true;
      state.modalTransaction = true;
    },

    setModalKey: (state, action) => {
      // console.log("action", action);
      state.modalKey = action.payload
    },

    modalClose: () => initialState,
  },
});

export const { modalClose, modalTransactionOpen, modalExitOpen, setModalKey } = modalSlice.actions;

export const modalReduser = modalSlice.reducer;
