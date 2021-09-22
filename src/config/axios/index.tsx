import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6fe592a1511f4afafa9e9e24fd0f2daa',
    language: 'es-Es',
  },
});
