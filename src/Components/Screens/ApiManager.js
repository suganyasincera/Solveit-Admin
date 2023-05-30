import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://52.1.46.82:3001/api/customer',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;