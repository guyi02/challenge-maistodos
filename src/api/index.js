import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
