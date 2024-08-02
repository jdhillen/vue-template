// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// ==|== Export ====================================================================================
export default {
  getPokemon() {
    return apiClient.get('/pokemon/ditto');
  }
};
