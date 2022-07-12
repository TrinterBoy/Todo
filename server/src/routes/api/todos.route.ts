import { Router } from "express";

import todoController from "../../controllers/todo.controller";
import Todo, { todoValidation } from "../../models/Todo";
import validationHandler from "../../handlers/validationHandler";
import tryCatchMiddleware from "../../middleware/tryCatchMiddleware";
import isExistMiddleware from "../../middleware/isExistMiddleware";
import { authMiddleware } from "../../middleware/auth.Middleware";

const todosRouter: Router = Router();

todosRouter.get("/",
    authMiddleware,
    tryCatchMiddleware(todoController.getAllTodo.bind(todoController))
);

todosRouter.post(
    "/create",
    todoValidation,
    validationHandler,
    authMiddleware,
    tryCatchMiddleware(todoController.createTodo.bind(todoController))
);

todosRouter.put(
    "/update/:id",
    isExistMiddleware(Todo),
    todoValidation,
    validationHandler,
    authMiddleware,
    tryCatchMiddleware(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
    "/delete/:id",
    isExistMiddleware(Todo),
    authMiddleware,
    tryCatchMiddleware(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
