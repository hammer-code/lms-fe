import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@/constants/configs';
import { getToken } from '@/lib/storage';

export const fetcher: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

fetcher.interceptors.request.use(
  config => {
    config.headers['Authorization'] = getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
