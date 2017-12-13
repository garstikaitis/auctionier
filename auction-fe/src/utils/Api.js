import axios from 'axios';
import { get, getById, deleteResource, putItemToUser } from './common/request';

class Api {
  async getUsers() {
    try {
      const { data } = await get('users');
      return data;
    } catch (error) {
      console.log('error fetching users', error);
    }
  }

  async getSingleUser(id) {
    try {
      const { data } = await getById('users', id);
      return data;
    } catch (error) {
      console.log('error fetching single user', error);
    }
  }

  async deleteUser(id) {
    try {
      const { data } = await deleteResource('users', id);
      return data;
    } catch (error) {
      console.log('error deleting single user', error);
    }
  }

  async createUser(user) {
    try {
      await axios.post(
        'http://localhost:3000/users',
        {
          username: user.username,
          password: user.password,
        },
        {
          withCredentials: false,
        },
      );
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  async getItems() {
    try {
      const { data } = await get('items');
      return data;
    } catch (error) {
      console.log('error fetching items', error);
    }
  }

  async addItemToUser(userId, itemId) {
    try {
      await putItemToUser('users', userId, itemId);
    } catch (error) {
      console.log('error putting items to user', error);
    }
  }

  async authenticate(user) {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/login',
        {
          username: user.username,
          password: user.password,
        },
        {
          withCredentials: false,
        },
      );
      return data;
    } catch (error) {
      console.log('error authenticating user', error);
    }
  }
}

export default new Api();
