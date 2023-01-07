import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  // totalBalance: 0,
  pageNum: 1,
  isWasUnmounted: false,

  info: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    getNextPage: (state, _) => {
      state.pageNum = state.pageNum + 1;
    },

    resetTransactions: (state, _) => {
      state.pageNum = 1;
      // state.totalBalance = 0;
      state.transactions = [];
      state.isWasUnmounted = false;
    },

    getTransactions: (state, action) => {
      if(!state.isWasUnmounted) {
        state.transactions = [
          ...state.transactions,
          ...action.payload.transactions,
        ];
      }

      // state.totalBalance = action.payload.userBalance;
    },

    setUnmount: (state, action) => {
      state.isWasUnmounted = action.payload
    },

  
    addInfo: (state, action) => {
      // console.log("action.payload", action.payload);
      state.info = [...state.info, ...action.payload.transactions];
    },
  },
    
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  addInfo,
  setUnmount,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
