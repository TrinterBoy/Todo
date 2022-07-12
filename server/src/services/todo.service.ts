import Todo from "../models/Todo";
import ITodo from "todos.type";

export default class TodoService {
    async findAll(user_id: string) {
        const todos = await Todo.find({ $or: [ { public: true }, { user: user_id } ] });
        return todos;
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
    async create(item: ITodo, user_id: string) {
        const data = {...item, user: user_id};
        const todo = await Todo.create(data);
        return todo;
    }
}