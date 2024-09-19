import axios from "axios";

const instance = axios.create({
  // "http://localhost:8080/"
  baseURL: "https://to-let-globe-api.onrender.com/",
  withCredentials: true,
});
export default instance;
