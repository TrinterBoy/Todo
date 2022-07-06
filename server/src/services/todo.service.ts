import Todo from "../models/Todo";
import ITodo from "todos.type";

export default class TodoService {
    async findAll() {
        const todo = await Todo.find();
        return todo;
    }
    async delete(id: string) {
        const filter = {_id: id};
        const todo = await Todo.deleteOne(filter);
        return todo;
    }
    async update(id: string, data: ITodo) {
        const filter = {_id: id};
        const replacement = {...data};
        const todo = await Todo.replaceOne( filter, replacement);
        return todo;
    }
    async create(data: ITodo) {
        const inf = {...data};
        const todo = await Todo.create(inf);
        return todo;
    }
}