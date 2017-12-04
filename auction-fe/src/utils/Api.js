import { get, getById } from './common/request';

class Api {
  async getUsers() {
    try {
      const { data } = await get('user');
      return data;
    } catch (error) {
      console.log('error fetching users', error);
    }
  }

  async getSingleUser(id) {
    try {
      const { data } = await getById('user', id);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error fetching single user', error);
    }
  }
}

export default new Api();
