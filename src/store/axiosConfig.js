import axios from "axios";

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2', // Replace with your API base URL
  });

  instance.interceptors.request.use(
    (config) => {
      const access = localStorage.getItem('access');
      
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );

  export default instance