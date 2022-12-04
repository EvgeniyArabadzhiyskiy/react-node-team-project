import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

export const addNewTransaction = createAsyncThunk(
  'transaction/ADD',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/transactions`, transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transaction/GET_ALL',
  async (page = 1, { rejectWithValue }) => {
    try {
      const result = await axios.get(`/transactions?page=${page}&limit=10`);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
