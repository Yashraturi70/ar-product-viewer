import axios from 'axios';
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export const fetchProducts = async () => {
  const res = await axios.get(`${BASE}/api/products`);
  return res.data;
};

export const fetchProduct = async (id: string) => {
  const res = await axios.get(`${BASE}/api/products/${id}`);
  return res.data;
};

export const postAnalytics = async (payload: any) => {
  await axios.post(`${BASE}/api/analytics`, payload);
};
