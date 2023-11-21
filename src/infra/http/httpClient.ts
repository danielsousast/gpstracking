import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:9098/',
  headers: {
    'Content-Type': 'application/json',
  },
});
