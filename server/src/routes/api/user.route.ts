import { Router } from "express";
import validationHandler from "../../handlers/validationHandler";
import { userValidation } from "../../models/User";
import tryCatchMiddleware from "../../middleware/tryCatchMiddleware";
import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post(
    "/login",
    userValidation,
    validationHandler,
    tryCatchMiddleware(userController.userLog.bind(userController))
);

userRouter.post(
    "/registration",
    userValidation,
    validationHandler,
    tryCatchMiddleware(userController.userReg.bind(userController))
);

export default userRouter;
