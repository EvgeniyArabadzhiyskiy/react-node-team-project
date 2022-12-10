// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios'


const BASE_URL = 'https://wallet-project.onrender.com/api';
console.log("BASE_URL", BASE_URL);

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };


// const axiosBaseQuery = ({ baseUrl }) => async ({ url, method, data, params }) => {
  
//   try {
//     const result = await axios({ url: baseUrl + url, method, data, params })
//     return { data: result.data }
//   } catch (axiosError) {
//     let err = axiosError
//     return {
//       error: {
//         status: err.response?.status,
//         data: err.response?.data || err.message,
//       },
//     }
//   }
// }