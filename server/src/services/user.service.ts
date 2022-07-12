import { IUser } from "user.type";
import UserModel from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export default class UserService {
    async login(data: IUser) {
        const user = await UserModel.findOne({ email: data.email });
        const token = jwt.sign(
            {id: user._id, email: user.email},
            "Dudnyk",
            {expiresIn: "24h"}
        );
        return { token };
    }
    async registration(data: IUser) {
        const hashedPassword = await bcrypt.hash(data.password, 5);
        const user = await UserModel.create({...data, password: hashedPassword});
        const token = jwt.sign(
            {id: user._id, email: user.email},
            "Dudnyk",
            {expiresIn: "24h"}
        );
        return { token };
    }
}