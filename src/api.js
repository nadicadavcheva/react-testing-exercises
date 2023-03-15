import axios from 'axios';

const API_KEY = 'X8owl4jE7S0Boyf6hZsukArng5eeF7JV';

const api = axios.create({
  baseURL: `https://api.outsidein.dev/${API_KEY}`,
});

export default api;
