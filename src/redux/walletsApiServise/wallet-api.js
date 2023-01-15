import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { BALANCE, BASE_URL, TRANSACTIONS, USER_CURRENT, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from 'constants/apiPath';
import { getQueryString } from 'helpers/getQueryString';

// const BASE_URL = 'https://wallet-backend-xmk0.onrender.com/api';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const walletsApi = createApi({
  reducerPath: 'walletsApi',
  baseQuery,
  tagTypes: ['Transaction', 'Statistics', 'User'],
  
  endpoints: builder => ({
    userRefresh: builder.query({
      query: () => `${USER_CURRENT}`,

      providesTags: ['User'],
    }),

    userRegistration: builder.mutation({
      query: user => ({ url: `${USER_REGISTER}`, method: 'POST', body: user }),

      invalidatesTags: ['User'],
    }),

    userLogin: builder.mutation({
      query: user => ({ url: `${USER_LOGIN}`, method: 'POST', body: user }),

      invalidatesTags: ['User'],
    }),

    userLogout: builder.mutation({
      query: () => ({ url: `${USER_LOGOUT}`, method: 'POST' }),

      // invalidatesTags: ['User'],
    }),

    getAllTransactions: builder.query({
      query: ({ pageNum = 1, limit = 10 } = {}) => ({
        url: `${TRANSACTIONS}?page=${pageNum}&limit=${limit}`,
        method: 'GET',
      }),

      providesTags: ['Transaction', 'User'],
    }),

    getBalance: builder.query({
      query: () => `${BALANCE}`,

      providesTags: ['Transaction', 'User'],
    }),

    addTransaction: builder.mutation({
      query: body => ({ url: `${TRANSACTIONS}`, method: 'POST', body: body }),

      invalidatesTags: ['Transaction'],
    }),

    getStatistic: builder.query({
      query: (data = {}) => {
        const query = getQueryString(data);

        return { url: query, method: 'GET' };
      },

      providesTags: ['Statistics'],
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserRefreshQuery,

  useGetAllTransactionsQuery,
  useAddTransactionMutation,
  useGetBalanceQuery,

  useGetStatisticQuery,
} = walletsApi;
