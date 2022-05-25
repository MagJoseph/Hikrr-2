import Axios from "axios";
import {BASE_URL} from '../globals'


const Client = Axios.create({ baseURL: BASE_URL });

Client.interceptors.request.use(
  (config) => {
    //reading our LS Token
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Client;
