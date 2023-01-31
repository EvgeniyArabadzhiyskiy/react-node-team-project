import { createSlice } from '@reduxjs/toolkit';
import { walletsApi } from 'redux/walletsApiServise/wallet-api';

const initialState = {
  transactions: [],
  totalBalance: 0,
  pageNum: 1,
  isWasUnmounted: false,

  editId: "",
  // editedTransaction: null,
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

    setEditId: (state, action) => {
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

    deleteTransaction: (state) => {
      state.transactions =  state.deletedId.reduce((acc, id) => {
        return acc.filter(item => item._id !== id)

      },[...state.transactions])
    },
  },



  extraReducers: builder => {
    builder.addMatcher(walletsApi.endpoints.editTransaction.matchFulfilled,
      (state, action) => {
        state.transactions = state.transactions.map(item => {
          if (item._id === action.payload?._id) return action.payload
        
          return item
        })
      })
  }

  // extraReducers: builder => {
  //   builder.addMatcher(walletsApi.endpoints.editTransaction.matchFulfilled,
  //     (state, action) => {
  //       state.editedTransaction = action.payload
  //     })
  // }
});

export const {
  getNextPage,
  resetTransactions,
  getTransactions,
  addInfo,
  setUnmount,
  setRemovedAmount,
  deleteTransaction,

  setEditId,
  setDeletedId,
  clearDeletedId,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
