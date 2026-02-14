import axios from "axios";
import { BASE_URL } from "../core/config";

axios.defaults.baseURL = BASE_URL;

export function request(endPoint, options = {}, method = "get") {
  return axios({
    url: endPoint,
    method,
    ...options,
  }).then(response => {
    console.log(response.data);
    return response.data;
  });
}
