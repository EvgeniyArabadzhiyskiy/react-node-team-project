import {
  createApi,
  //  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { store } from "../store";


const BASE_URL = 'https://wallet-project.onrender.com/api';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const axiosBaseQuery =
  ({ baseUrl }) =>
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
        // return { url: '/users/register', method: 'POST', body: user };
      },

      transformResponse: (response, meta, arg) => {
        token.set(response.token);
        return response;
      },
    }),

    userLogin: builder.mutation({
      query: user => {
        return { url: '/users/login', method: 'POST', data: user };
      },

      transformResponse: (response, meta, arg) => {
        token.set(response.token);
        return response;
      },
    }),

    userLogout: builder.mutation({
      query: () => {
        return { url: '/users/logout', method: 'POST' };
      },

      transformResponse: (response, meta, arg) => {
        token.unset();
        return response;
      },
    }),

    userRefresh: builder.query({
      query: () => {
        return { url: '/users/current', method: 'GET' };
      },
      
      transformResponse: (response, meta, arg) => {
        const state = store.getState()
        const persistedToken = state.auth.token;

        token.set(persistedToken);
        return response;
      },
    }),

    getAllTransactions: builder.query({
      query: (page) => {
        
        
        return { url: `/transactions?page=${page}&limit=10`, method: 'GET' };
      },

      providesTags: ['Transaction'],

      transformResponse: (response, meta, arg) => {
        // console.log( 'Response', response);
        return response
      },
    }),

    addTransact: builder.mutation({
      query: body => ({ url: '/transactions', method: 'POST', data: body }),
      invalidatesTags: ['Transaction'],
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
} = walletsApi;

// export const { reducer, reducerPath } = walletsApi;
