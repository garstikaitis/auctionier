import axios from 'axios';
axios.defaults.withCredentials = true;

export const get = async resource => {
  return axios.get(`http://localhost:3000/api/${resource}`, {
    withCredentials: false,
  });
};

export const getById = async (resource, id) => {
  return axios.get(`http://localhost:3000/api/${resource}/${id}`, {
    withCredentials: false,
  });
};

export const deleteResource = async (resource, id) => {
  return axios.delete(`http://localhost:3000/api/${resource}/${id}`, {
    withCredentials: false,
  });
};

export const putItemToUser = async (resource, first, second) => {
  return axios.put(
    `http://localhost:3000/api/${resource}/${first}/${second}`,
    {},
    {
      withCredentials: false,
    },
  );
};
