// import axios from 'axios';
// import { store } from "../store";
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react';
import { getQueryString } from 'helpers/getQueryString';
// import { headerAuth } from 'helpers/headerAuth';


const BASE_URL = 'https://wallet-backend-xmk0.onrender.com/api';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    if (token) {
      console.log("token", token);
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})












// const axiosBaseQuery = ({ baseUrl }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const walletsApi = createApi({
  reducerPath: 'walletsApi',
  // baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),

  baseQuery,

  tagTypes: ['Transaction', 'Statistics'],

  endpoints: builder => ({

    userRegistration: builder.mutation({
      query: user => {
        return { url: '/users/register', method: 'POST', body: user };

        // body если используется fetchBaseQuery 
        // return { url: '/users/register', method: 'POST', body: user }; 
      },

    }),

    userLogin: builder.mutation({
      query: user => {
        return { url: '/users/login', method: 'POST', body: user };
      },
     
    }),

    userLogout: builder.mutation({
      query: () => {
        return { url: '/users/logout', method: 'POST' };
      },

    }),

    userRefresh: builder.query({
      query: () => {
        // const state = store.getState();
        // const persistedToken = state.auth.token;
        // headerAuth.set(persistedToken);

        return { url: '/users/current', method: 'GET' };
      },
    }),

    getAllTransactions: builder.query({
      query: (page = 1) => ({ url: `/transactions?page=${page}&limit=10`, method: 'GET' }),

      providesTags: ['Transaction'],
    }),

    addTransaction: builder.mutation({
      query: body => ({ url: '/transactions', method: 'POST', body: body }),

      invalidatesTags: ['Transaction'],
    }),

    getStatistic: builder.query({
      query: (data = {}) => {
        const query = getQueryString(data);

        return { url: query, method: 'GET' }
      },

      // async onQueryStarted(id, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //     console.log("Data", data);
      //   } catch (err) {
      //   }
      // },
      
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

  useGetStatisticQuery,
} = walletsApi;
