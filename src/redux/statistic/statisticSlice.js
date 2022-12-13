import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statistic: [],
  isLoading: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,

  reducers: {
    getStatistic: (state, action) => {
      state.statistic = action.payload;
    }
  },

  // extraReducers: builder => {
  //   builder.addCase(getStatistic.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.statistic = action.payload;
  //     state.error = null;
  //   });
  //   builder.addCase(getStatistic.rejected, (state, action) => {
  //     state.error = action.payload;
  //   });
  // },
});

export const { getStatistic } = statisticSlice.actions

export default statisticSlice.reducer;
