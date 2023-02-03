import { baseQuery } from './baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { USER_CURRENT, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from 'constants/apiPath';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],

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
  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserRefreshQuery,
} = userApi;
