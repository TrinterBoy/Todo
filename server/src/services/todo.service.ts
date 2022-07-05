import Todo from "../models/Todo";
import ITodo from "todos.type";

export default class TodoService {
    async findAll() {
        const todo = await Todo.find();
        return todo;
    }
    async delete(id: string) {
        const todo = await Todo.deleteOne({_id: id});
        return todo;
    }
    async update(id: string, data: ITodo) {
        const todo = await Todo.replaceOne( {_id: id}, {...data});
        return todo;
    }
    async create(data: ITodo) {
        const todo = await Todo.create({...data});
        return todo;
    }
}