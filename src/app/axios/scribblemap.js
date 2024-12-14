import axios from 'axios';
import { API_BASE_URL } from '../constant/apiEndPoints';

const createApi = () => {
  // Create an Axios instance
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Function to set the access token in the Authorization header
  const setAccessTokenInHeader = (accessToken) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  // Function to refresh the token
  const refreshAccessToken = async () => {
    try {
      // Make a request to your refresh token endpoint
      const response = await api.get('/api/refresh-token', {
        // include any necessary data for refreshing the token
      });

      // Extract the new access token from the response
      const newAccessToken = response.data.access_token;

      // Set the new access token in the Authorization header
      setAccessTokenInHeader(newAccessToken);

      console.log('Token refreshed successfully');
    } catch (error) {
      console.error('Error refreshing token', error);
    }
  };

  // Axios request interceptor to handle token expiration
  api.interceptors.request.use(
    async (config) => {
      // Check if the access token is expired or close to expiration
      // You may need to modify this condition based on your token expiration logic
      if (!config.headers.common || !config.headers.common['Authorization']) {
        await refreshAccessToken();
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};

// Export the created Axios instance
const api = createApi();
export default api;
