export interface IUser {
    _id: string;
    email: string;
    password: string;
}
export interface IToken {
    user: IUser;
}
