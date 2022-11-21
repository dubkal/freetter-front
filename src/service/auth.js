import axios from "axios";

const baseUrl = "/api/auth/";

const signup = (newObject) => {
  const request = axios.post(baseUrl + "signup", newObject);
  return request.then((response) => response.data);
}

const login = (newObject) => {
  const request = axios.post(baseUrl + "login", newObject);
  return request.then((response) => response.data);
}

const functions = { signup, login }
export default functions;
