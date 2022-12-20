import axios from 'axios';
import { store } from "../store";
import { createApi } from '@reduxjs/toolkit/query/react';
import { userRegistration, userLogin, userLogout, userRefresh } from 'redux/auth/authSlice';
import { getQueryString } from 'helpers/getQueryString';
import { headerAuth } from 'helpers/headerAuth';

// const BASE_URL = 'https://wallet-project.onrender.com/api';
const BASE_URL = 'https://wallet-backend-xmk0.onrender.com/api';

const axiosBaseQuery = ({ baseUrl }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const walletsApi = createApi({
  reducerPath: 'walletsApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),

  tagTypes: ['Transaction'],

  endpoints: builder => ({

    userRegistration: builder.mutation({
      query: user => {
        return { url: '/users/register', method: 'POST', data: user };

        // body если используется fetchBaseQuery 
        // return { url: '/users/register', method: 'POST', body: user }; 
      },

      transformResponse: (response) => {
        store.dispatch(userRegistration(response))
        headerAuth.set(response.token);

        return response;
      },
    }),

    userLogin: builder.mutation({
      query: user => {
        return { url: '/users/login', method: 'POST', data: user };
      },

      transformResponse: (response, meta, arg) => {
        store.dispatch(userLogin(response))
        headerAuth.set(response.token);

        return response;
      },
    }),

    userLogout: builder.mutation({
      query: () => {
        return { url: '/users/logout', method: 'POST' };
      },

      transformResponse: (response) => {
        store.dispatch(userLogout(response))
        headerAuth.unset();

        return response;
      },
    }),

    userRefresh: builder.query({
      query: () => {
        const state = store.getState()
        const persistedToken = state.auth.token;
        headerAuth.set(persistedToken);

        return { url: '/users/current', method: 'GET' };
      },
      
      transformResponse: (response) => {
        store.dispatch(userRefresh(response))

        return response;
      },
    }),

    getAllTransactions: builder.query({
      query: (page) => ({ url: `/transactions?page=${page}&limit=10`, method: 'GET' }),

      providesTags: ['Transaction'],
    }),

    addTransact: builder.mutation({
      query: body => ({ url: '/transactions', method: 'POST', data: body }),

      invalidatesTags: ['Transaction'],
    }),

    getStatistic: builder.query({
      query: (data = {}) => {
        const query = getQueryString(data);

        return { url: query, method: 'GET' }
      },

      providesTags: ['Transaction'],

    }),
      

  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserRefreshQuery,

  useGetAllTransactionsQuery,
  useAddTransactMutation,

  useGetStatisticQuery,
} = walletsApi;
