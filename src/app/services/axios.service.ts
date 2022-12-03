import { API_BASE } from '@env';
import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '../../common/types/apiResponse';
import { useAuthStore } from '../../lib/auth/auth.store';

const axiosClient = axios.create({
  baseURL: API_BASE,
});

axiosClient.interceptors.request.use(
  function (config) {
    const nextConfig = { ...config };
    const { token } = useAuthStore.getState();

    if (!token) {
      return config;
    }

    if (!nextConfig.data) {
      nextConfig.data = new FormData();
      nextConfig.data.append('token', token);
      return nextConfig;
    }

    if (nextConfig.data instanceof FormData) {
      nextConfig.data.append('token', token);
      return nextConfig;
    }

    if (nextConfig.data && !(nextConfig.data instanceof FormData)) {
      nextConfig.data.token = token;
      return nextConfig;
    }

    return nextConfig;
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
