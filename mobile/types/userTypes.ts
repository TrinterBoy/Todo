export interface IUser{
    token?:string;
    email:string;
    password:string;
}
export interface IUserStrict{
    token:string;
    email:string;
    password:string;
}
class UserModel {
    email:string;
    password:string;
    token:string;
    constructor(user: IUserStrict) {
      this.email=user.email;
      this.password=user.password;
      this.token=user.token;
    }
}

export const createUserModel = (user: IUserStrict) => {
  return new UserModel(user);
};
