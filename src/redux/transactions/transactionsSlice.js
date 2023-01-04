import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,

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

  
    addInfo: (state, action) => {
      // console.log("action.payload", action.payload);
      state.info = [...state.info, ...action.payload.transactions];
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
  addInfo
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
