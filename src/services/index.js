// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
  baseURL: `https://www.jdhillen.io/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// ==|== Export ====================================================================================
export default {
  getContact() {
    return apiClient.get('/resume/contact/1/');
  }
};
