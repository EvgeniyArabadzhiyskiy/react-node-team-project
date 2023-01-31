import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  month: null,
  year: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,

  reducers: {
    getStatisticDate: (state, action) => {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
  },
});

export const { getStatisticDate } = statisticSlice.actions;

export default statisticSlice.reducer;
