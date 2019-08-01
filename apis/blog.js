import axios from "axios";

const apiURL = process.env.API_URL;

export default axios.create({
  baseURL: `${apiURL}`
});
