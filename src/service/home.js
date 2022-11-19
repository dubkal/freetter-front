import axios from "axios";

const baseUrl = "/api/home/";

const getHomeString = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
}
const functions = { getHomeString }
export default functions;
