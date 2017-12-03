import { get } from './common/request';

class Api {
  getUsers() {
    return get('user');
  }
}

export default new Api();
