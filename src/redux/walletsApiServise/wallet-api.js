import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { BALANCE, BASE_URL, TRANSACTIONS, USER_CURRENT, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from 'constants/apiPath';
import { getQueryString } from 'helpers/getQueryString';


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

    }),

    getAllTransactions: builder.query({
      query: ({ pageNum = 1, limit = 10 } = {}) => ({
        url: `${TRANSACTIONS}?page=${pageNum}&limit=10`,
        method: 'GET',
      }),

      providesTags: ['Transaction', 'User'],

      // providesTags: (result, error, arg) => {
      //   const fff = [...result.transactions.map(({ _id }) => { return { type: 'Transaction', _id }}),
      //     { type: 'Transaction', id: 'LIST' }]

      //   console.log("fff", fff);
      //   return result
      //   ? [...result.transactions.map(({ _id }) => { return { type: 'Transaction', _id }}), { type: 'Transaction', id: 'ADD_LIST' } ]
      //   : [{ type: 'Transaction', id: 'LIST' }]
      // },
    }),

    getBalance: builder.query({
      query: () => `${BALANCE}`,

      providesTags: ['Transaction', 'User'],
    }),

    addTransaction: builder.mutation({
      query: body => ({ url: `${TRANSACTIONS}`, method: 'POST', body: body }),

      invalidatesTags: ['Transaction'],

      // invalidatesTags: [{ type: 'Transaction', id: 'LIST' }],
    }),

    deleteTransaction: builder.mutation({
      query: (id) => ({ url: `${TRANSACTIONS}/${id}`, method: 'DELETE'}),

      invalidatesTags: ['Statistic'],
      
      // invalidatesTags: (result, error, arg) => {
      //   // console.log("arg", arg);
      //   return  [{ type: 'Transaction', _id: arg }]
      // },
    }),

    getStatistic: builder.query({
      query: (data = {}) => {
        const query = getQueryString(data);

        return { url: query, method: 'GET' };
      },

      providesTags: [ 'Statistic'],
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
  useDeleteTransactionMutation,
  useGetBalanceQuery,

  useGetStatisticQuery,
} = walletsApi;
