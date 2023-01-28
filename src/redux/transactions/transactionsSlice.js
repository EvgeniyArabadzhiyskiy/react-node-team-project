import { createSlice } from '@reduxjs/toolkit';
import { walletsApi } from 'redux/walletsApiServise/wallet-api';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,
  isWasUnmounted: false,

  // removedSum: 0,
  editId: "",
  editedTransaction: null,
  deletedId: [],

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

    // setRemovedAmount: (state, action) => {
    //   state.removedSum += action.payload;
    // },

    setEditId: (state, action) => {
      // console.log("action", action);
      state.editId = action.payload
    },

    setDeletedId: (state, action) => {
      state.deletedId = [...state.deletedId, action.payload];
    },

    clearDeletedId: (state, action) => {
      state.deletedId = state.deletedId.filter(
        removedId => removedId !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder.addMatcher(walletsApi.endpoints.editTransaction.matchFulfilled,
      (state, action) => {
        // console.log("action", action.payload);
        state.editedTransaction = action.payload
      })
  }
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  addInfo,
  setUnmount,
  setRemovedAmount,

  setEditId,
  setDeletedId,
  clearDeletedId,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
