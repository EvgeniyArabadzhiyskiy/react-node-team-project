import { baseQuery } from './baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { BALANCE,  TRANSACTIONS } from 'constants/apiPath';
import { getQueryString } from 'helpers/getQueryString';

export const walletsApi = createApi({
  reducerPath: 'walletsApi',
  baseQuery,
  tagTypes: ['Transaction', 'Statistics', 'User'],
  
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: ({ pageNum = 1, limit = 10 } = {}) => ({
        url: `${TRANSACTIONS}?page=${pageNum}&limit=10`,
        method: 'GET',
      }),

      providesTags: ['Transaction', 'User']
    }),

    getBalance: builder.query({
      query: () => `${BALANCE}`,
      transformResponse: (result) => result.userBalance,
      
      providesTags: [{ type: 'Transaction', id: 'BALANCE' }, 'User']
    }),

    addTransaction: builder.mutation({
      query: body => ({ url: `${TRANSACTIONS}`, method: 'POST', body: body }),

      invalidatesTags: ['Transaction', 'Statistic']
    }),

    deleteTransaction: builder.mutation({
      query: (id) => ({ url: `${TRANSACTIONS}/${id}`, method: 'DELETE'}),

      invalidatesTags: ['Statistic', { type: 'Transaction', id: 'BALANCE' }],
    }),

    editTransaction: builder.mutation({
      query: ({id, transaction}) => ({ url: `${TRANSACTIONS}/edit/${id}`, method: 'PUT', body: transaction }),

      invalidatesTags: ['Statistic', { type: 'Transaction', id: 'BALANCE' }],
    }),

    getStatistic: builder.query({
      query: (data = {}) => {
        const query = getQueryString(data);

        return { url: query, method: 'GET' };
      },

      providesTags: ['Statistic'],
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useEditTransactionMutation,
  useGetBalanceQuery,
  useGetStatisticQuery,
} = walletsApi;
