import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { themeReducer } from './theme/themeSlice';
import { statisticReducer } from './statistic';
import { modalReduser } from './modal/modalSlice';
import { transactionsReducer } from './transactions/transactionsSlice';
import { walletsApi } from './WalletApiServise/wallet-api';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    modal: modalReduser,
    transactions: transactionsReducer,
    statistic: statisticReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    [walletsApi.reducerPath]: walletsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(walletsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
