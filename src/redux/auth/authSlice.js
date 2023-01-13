import { createSlice } from '@reduxjs/toolkit';
import { walletsApi } from 'redux/walletsApiServise/wallet-api';

const initialState = {
  user: { firstName: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        walletsApi.endpoints.userRegistration.matchFulfilled,
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        walletsApi.endpoints.userLogin.matchFulfilled,
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        walletsApi.endpoints.userLogout.matchFulfilled,
        (state, action) => {
          state.user = { name: null, email: null, balance: 0 };
          state.token = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        walletsApi.endpoints.userRefresh.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      );
  },

  // action.type.endsWith('/rejected')  Пример  Общий обработчик ошибок
});

export const {
  userRegistration,
  userLogin,
  userLogout,
  userRefresh,
  setToken,
} = authSlice.actions;

export default authSlice.reducer;
