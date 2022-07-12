import { HttpService } from './http.setvice';
import { User } from '../static/QUERY.KEY';
import { createUserModel, IUser } from '../../types/userTypes';


class UserService extends HttpService {
  constructor() {
    super();
  }

  async registration(user: IUser) {
    const { data } = await this.post(
        { url: User+`/registration`,
          data: { ...user },
        });
    const member = createUserModel(data);
    return member;
  }

  async login(user: IUser) {
    const { data } = await this.post({
      url: User+`/login`,
      data: { ...user } });
    const member: IUser ={ ...data };
    return member;
  }
}

const userService = new UserService();

export default userService;
