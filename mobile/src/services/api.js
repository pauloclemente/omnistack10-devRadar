import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.101.40:3333"
});
export default api;
