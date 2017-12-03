import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.DEV_URL;
const port = process.env.PORT;

export const get = resource => {
  return axios.get(`http://localhost:3000/${resource}`);
};
