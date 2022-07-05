import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
    constructor(private todoService: TodoService) {}
    async getAllTodo(_: Request, res: Response) {
        const todos = await this.todoService.findAll();
        res.send(todos);
    }
    async deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        const todo = await this.todoService.delete(id);
        res.send(todo);
    }
    async updateTodo(req: Request, _: Response) {
        const { id } = req.params;
        const data = {...req.body};
        const todo = await this.todoService.update(id, data);
        return todo;
    }
    async createTodo(req: Request, _: Response) {
        const data = {...req.body};
        const todo = await this.todoService.create(data);
        return todo;
    }
}

const todoController = new TodoController(new TodoService());
export default todoController;