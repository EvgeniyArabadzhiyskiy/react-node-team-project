import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,

  isModalOpen: false,
  modalTransaction: false,
  modalExit: false,
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
      state.totalBalance = 0;
      state.transactions = [];
    },

    getTransactions: (state, action) => {
      state.transactions = [
        ...state.transactions,
        ...action.payload.transactions,
      ];
      state.totalBalance = action.payload.userBalance;
    },

    toggleModalOverlay: (state, action) => {
      state.isModalOpen = action.payload;
    },

    toggleModalTransaction: (state, action) => {
      state.modalTransaction = action.payload;
    },

    toggleModalExit: (state, action) => {
      state.modalExit = action.payload;
    },
  },

  // extraReducers: builder => {
  //   builder.addMatcher(walletsApi.endpoints.getAllTransactions.matchFulfilled,
  //     (state, action) => {
  //       // console.log("action", action.payload);
  //       state.transactions = [...state.transactions, ...action.payload.transactions];
  //       // state.totalBalance = action.payload.userBalance;

  //     })
  // }
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  toggleModalOverlay,
  toggleModalTransaction,
  toggleModalExit,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
