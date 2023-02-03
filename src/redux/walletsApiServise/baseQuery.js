import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from 'constants/apiPath';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
