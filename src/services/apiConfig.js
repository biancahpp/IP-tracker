import axios from 'axios';

const api = axios.create({
  baseURL: `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_IPIFY_TOKEN}`,
  // baseURL: 'https://geo.ipify.org/api/v1?apiKey=at_9cPWxgVwrmqobymowXny2rQwsXbtq',

});

export default api;
