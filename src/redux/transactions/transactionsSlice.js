import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,
  isWasUnmounted: false,

  removedSum: 0,

};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    getNextPage: state => {
      state.pageNum = state.pageNum + 1;
    },

    resetTransactions: () => initialState,

    getTransactions: (state, action) => {
      if (!state.isWasUnmounted) {
        state.transactions = [
          ...state.transactions,
          ...action.payload.transactions,
        ];
      }
    },

    setUnmount: (state, action) => {
      state.isWasUnmounted = action.payload;
    },

    setRemovedAmount: (state, action) => {
      state.removedSum += action.payload
    },

   
  },
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  addInfo,
  setUnmount,
  setRemovedAmount,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
