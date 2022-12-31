import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddOpen: false,
  transactions: [],
  totalBalance: 0,
  pageNum: 1,
  
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    toggleModalAdd: (state, action) => {
      state.isModalAddOpen = action.payload;
    },

    getNextPage: (state, _) => {
      state.pageNum = state.pageNum + 1;
    },

    resetTransactions: (state, _) => {
      state.pageNum = 1;
      state.totalBalance = 0;
      state.transactions = [];
    },

    getTransactions: (state, action) => {
      state.transactions = [...state.transactions, ...action.payload.transactions];
      state.totalBalance = action.payload.userBalance;
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

export const { toggleModalAdd, getNextPage, resetTransactions, getTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
