import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalTransaction: false,
  modalExit: false,
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

    modalClose: () => initialState,
  },
});

export const { modalClose, modalTransactionOpen, modalExitOpen } = modalSlice.actions;

export const modalReduser = modalSlice.reducer;
