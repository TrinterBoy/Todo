import { model, Schema } from "mongoose";
import { IUser } from "user.type";
import { body } from "express-validator/check";

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const userValidation = [
    body(["email", "password"])
        .exists({ checkNull: true, checkFalsy: true })
        .withMessage("Required field is empty"),
    body("email")
        .isEmail()
        .withMessage("Incorrect email"),
];
const UserModel = model("User", UserSchema);
export default UserModel;