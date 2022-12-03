import axios, { AxiosResponse } from 'axios';
import { API_BASE } from '@env';
import { ApiResponse } from '../../common/types/apiResponse';

const axiosClient = axios.create({
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

axiosClient.interceptors.response.use(function (
  response: AxiosResponse<ApiResponse<any>>,
) {
  if (response.data.id !== '00') {
    return Promise.reject(response);
  }

  return response;
},
undefined);

export { axiosClient };
