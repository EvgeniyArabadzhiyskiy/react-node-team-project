// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const queryString = ({month, year}) => {
//   if (month && year)  return `/transactions/statistics?month=${month}&year=${year}`
//   if (year)  return `/transactions/statistics?year=${year}`
//   if (month)  return `/transactions/statistics?month=${month}`
//   return '/transactions/statistics'
// }
// export const getStatistic = createAsyncThunk(
//   'transactions/statistics',
//   async (data={}, { rejectWithValue }) => {
//     const query = queryString(data);
//     try {
//       const res = await axios.get(query);
//       return res.data;
      
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );










