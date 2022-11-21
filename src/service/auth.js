import axios from "axios";

const baseUrl = "/api/auth/";

const signup = (newObject) => {
  const request = axios.post(baseUrl + "signup", newObject);
  return request.then((response) => response.data);
}

const functions = { signup }
export default functions;
