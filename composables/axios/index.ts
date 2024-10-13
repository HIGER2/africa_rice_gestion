import axios from "axios";
import { useCookies } from "../hooks/useCookie";

export const baseURL = axios.create({
  // baseURL: 'http://smsplus.wicsoft.cloud',
  // baseURL: "https://test.wicsoft.cloud",
  baseURL: 'https://api.africarice.site/api/',
  // baseURL: 'http://127.0.0.1:8000/api/',
  // timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json', 
  }
});


baseURL.interceptors.request.use((config) => {
  const { getCookie } = useCookies();
  const token = getCookie('token');
  if (token) config.headers[ 'Authorization' ] = 'Bearer ' + token
  return config
})


