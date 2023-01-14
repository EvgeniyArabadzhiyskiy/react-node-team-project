import { createSlice } from '@reduxjs/toolkit';
// import { walletsApi } from 'redux/walletsApiServise/wallet-api';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,
  isWasUnmounted: false,

  info: [],
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

    addInfo: (state, action) => {
      state.info = [...state.info, ...action.payload.transactions];
    },
  },

  // extraReducers: builder => {
  //   builder.addMatcher(
  //     walletsApi.endpoints.getAllTransactions.matchFulfilled,
  //     (state, action) => {
  //       state.totalBalance = action.payload.userBalance;
  //     }
  //   );
  // },
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  addInfo,
  setUnmount,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
