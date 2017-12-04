import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.DEV_URL;
const port = process.env.PORT;

export const get = async resource => {
  return axios.get(`http://localhost:3000/${resource}`, {
    withCredentials: false,
  });
};

export const getById = async (resource, id) => {
  return axios.get(`http://localhost:3000/${resource}/${id}`, {
    withCredentials: false,
  });
};

export const deleteResource = async (resource, id) => {
  return axios.delete(`http://localhost:3000/${resource}/${id}`, {
    withCredentials: false,
  });
};
