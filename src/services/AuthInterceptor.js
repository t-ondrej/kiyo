import axios from "axios";
import { tokenService } from ".";

axios.defaults.baseURL = 'https://api.spotify.com/v1'

axios.interceptors.request.use(
  config => {
      const accessToken = tokenService.getAccessToken();
      
      if (accessToken) {
          config.headers['Authorization'] = 'Bearer ' + accessToken;
      }

      return config;
  },
  error => {
      Promise.reject(error)
  });