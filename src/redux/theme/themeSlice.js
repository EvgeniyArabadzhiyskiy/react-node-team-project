import { createSlice } from '@reduxjs/toolkit';

const initialState = { isNightTheme: true };

const themeSlice = createSlice({
  name: 'isNightTheme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.isNightTheme = !state.isNightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
