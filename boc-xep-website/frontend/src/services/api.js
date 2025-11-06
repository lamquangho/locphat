import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services API
export const getServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

// Pricing API
export const getPricing = async () => {
  const response = await api.get('/pricing');
  return response.data;
};

// Projects API
export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

// Contact API
export const submitContact = async (contactData) => {
  const response = await api.post('/contacts', contactData);
  return response.data;
};

export default api;

