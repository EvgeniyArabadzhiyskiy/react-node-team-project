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

    getNextPage: (state, action) => {
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
  //   builder.addCase(addNewTransaction.pending, state => {
  //     state.error = null;
  //     state.isLoading = true;
  //   });

  //   builder.addCase(addNewTransaction.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //   });

  //   builder.addCase(addNewTransaction.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });

  //   builder.addCase(getAllTransactions.pending, (state, _) => {
  //     state.error = null;
  //     state.isLoading = true;
  //   });

  //   builder.addCase(getAllTransactions.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.hasNextPage = Boolean(action.payload.transactions.length);

  //     if (state.pageNum === 1) {
  //       state.transactions = [...action.payload.transactions];
  //     } else {
  //       state.transactions = [
  //         ...state.transactions,
  //         ...action.payload.transactions,
  //       ];
  //     }

  //     if (action.payload.transactions.length > 0 && state.pageNum === 1) {
  //       state.totalBalance = action.payload.userBalance;
  //     }
  //   });

  //   builder.addCase(getAllTransactions.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const { toggleModalAdd, getNextPage, resetTransactions, getTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
