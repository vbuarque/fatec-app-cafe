import axios from 'axios';

const api = axios.create({
  baseURL: "https://miau-app-back.onrender.com/",
});

export default api;