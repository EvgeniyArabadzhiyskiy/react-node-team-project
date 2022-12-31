import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statistic: [],
  month: '',
  year: '',
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,

  reducers: {
    getStatistic: (state, action) => {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
  },
});

export const { getStatistic } = statisticSlice.actions;

export default statisticSlice.reducer;
