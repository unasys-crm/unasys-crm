import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Deve estar configurado no Vercel
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
