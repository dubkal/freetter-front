import axios from "axios";
import authHeaderService from "./auth-header";

const baseUrl = "/api/test/";

const getPublicContent = () => {
  const request = axios.get(baseUrl + "all")
  return request.then((response) => response.data)
}

const getGreetings = () => {
  console.log("logging greetings");
  console.log(authHeaderService.authHeader());
  const request = axios.get(baseUrl + "greeting", { headers: authHeaderService.authHeader() });
  return request.then((response) => response.data);
}

const functions = { getPublicContent, getGreetings };
export default functions;
