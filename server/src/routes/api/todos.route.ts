import { Router } from "express";

import todoController from "../../controllers/todo.controller";
import Todo, { todoValidation } from "../../models/Todo";
import validationHandler from "../../handlers/validationHandler";
import tryCatchMiddleware from "../../middleware/tryCatchMiddleware";
import isExistMiddleware from "../../middleware/isExistMiddleware";

const todosRouter: Router = Router();

todosRouter.get("/",
    tryCatchMiddleware(todoController.getAllTodo.bind(todoController))
);

todosRouter.post(
    "/create",
    todoValidation,
    validationHandler,
    tryCatchMiddleware(todoController.createTodo.bind(todoController))
);

todosRouter.put(
    "/update/:id",
    isExistMiddleware(Todo),
    todoValidation,
    validationHandler,
    tryCatchMiddleware(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
    "/delete/:id",
    isExistMiddleware(Todo),
    tryCatchMiddleware(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
