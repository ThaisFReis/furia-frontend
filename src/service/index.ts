import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001' // Ajuste para a porta do seu backend (5000 ou 3001)
});