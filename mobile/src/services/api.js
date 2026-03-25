import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_IP:3000/api'
});

export default api;