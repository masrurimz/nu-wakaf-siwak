import axios from 'axios';
import { API_BASE } from '@env';

export const axiosClient = axios.create({
  baseURL: API_BASE,
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
