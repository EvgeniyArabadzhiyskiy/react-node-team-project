import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { transactionsSlice } from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
});
