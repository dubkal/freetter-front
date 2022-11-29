import axios from "axios";
import authHeaderService from "./auth-header";

const baseUrl = "/api/";

const getPublicContent = async () => {
  const request = axios.get(baseUrl + "all")
  const response = await request;
  return response.data;
}

const getUsername = async () => {
  console.log("logging greetings");
  console.log(authHeaderService.authHeader());
  const request = axios.get(baseUrl + "username", { headers: authHeaderService.authHeader() });
  const response = await request;
  return response.data;
}
const getUser = async () => {
  const request = axios.get(baseUrl + "user", { headers: authHeaderService.authHeader() });
  const response = await request;
  return response.data;
}
const functions = { getPublicContent, getUsername, getUser };
export default functions;
