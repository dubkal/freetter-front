import axios from "axios";

const baseUrl = "/api/auth/";

const register = (newObject) => {
  const request = axios.post(baseUrl + "register", newObject);
  return request.then((response) => response.data);
}

const functions = { register }
export default functions;
