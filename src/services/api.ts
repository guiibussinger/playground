import axios from 'axios';

const baseURL = 'https://books.ioasys.com.br/api/v1';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAuthorization = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default api;
