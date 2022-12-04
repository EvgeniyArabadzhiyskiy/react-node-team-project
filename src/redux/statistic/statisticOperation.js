import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

const querySyring = ({month, year}) => {
  if (month && year)  return `/transactions/statistics?month=${month}&year=${year}`
  if (year)  return `/transactions/statistics?year=${year}`
  if (month)  return `/transactions/statistics?month=${month}`
  return '/transactions/statistics'
}
export const getStatistic = createAsyncThunk(
  'transactions/statistics',
  async (data={}, { rejectWithValue }) => {
    const query = querySyring(data);
    try {
      const res = await axios.get(query);
      return res.data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);










