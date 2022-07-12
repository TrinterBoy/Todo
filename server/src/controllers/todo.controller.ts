import { Response, Request } from "express";
import TodoService from "../services/todo.service";
import { TypedRequest, TypedRequestBody, TypedRequestParams } from "request.types";
import ITodo from "todos.type";

export class TodoController {
    constructor(private todoService: TodoService) {}
    async getAllTodo(req: Request, _: Response) {
        const todos = await this.todoService.findAll(req.app.get("user").id);
        console.log(req.app.get("user").id);
        return todos;
    }
    async deleteTodo(req: TypedRequestParams<{id: string}>, _: Response) {
        const id = req.params.id;
        const todo = await this.todoService.delete(id);
        return todo;
    }
    async updateTodo(req: TypedRequest<{id: string}, ITodo>, _: Response) {
        const id = req.params.id;
        const data = {...req.body};
        const todo = await this.todoService.update(id, data);
        return todo;
    }
    async createTodo(req: TypedRequestBody<ITodo>, _: Response) {
        const data = {...req.body};
        const todo = await this.todoService.create(data, req.app.get("user").id);
        return todo;
    }
}

const todoController = new TodoController(new TodoService());
export default todoController;