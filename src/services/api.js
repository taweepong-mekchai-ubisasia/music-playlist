import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update with your backend URL

export const api = axios.create({
  baseURL: API_URL,
});
