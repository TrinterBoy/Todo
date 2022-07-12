import { Response, Request } from "express";
import UserService from "../services/user.service";

export class UserController {
    constructor(private userService: UserService) {}
    async userReg(req: Request, _: Response) {
        const todos = await this.userService.registration(req.body);
        return todos;
    }async userLog(req: Request, _: Response) {
        const todos = await this.userService.login(req.body);
        return todos;
    }
}

const userController = new UserController(new UserService());
export default userController;