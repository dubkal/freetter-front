import axios from "axios";

const baseUrl = "/api/auth/";

const signup = (newObject) => {
  const request = axios.post(baseUrl + "signup", newObject);
  return request.then((response) => response.data);
}

const login = (newObject) => {
  const request = axios.post(baseUrl + "login", newObject);
  return request
    .then((response) => {
      console.log("this is login response");
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    });
}

const logout = () => {
  localStorage.removeItem("user");
};

const functions = { signup, login, logout }
export default functions;
