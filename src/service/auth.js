import axios from "axios";

const baseUrl = "/api/auth/";

const signup = async (newObject) => {
  const request = axios.post(baseUrl + "signup", newObject);
  const response = await request;
    return response.data;
}

const login = async (newObject) => {
  const request = axios.post(baseUrl + "login", newObject);
  const response = await request;
    console.log("this is login response");
    console.log(response.data);
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const logout = () => {
  localStorage.removeItem("user");
};

const functions = { signup, login, logout }
export default functions;
