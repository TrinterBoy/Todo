import { model, Schema } from "mongoose";
import { body } from "express-validator/check";
import ITodo from "../types/todos.type";

const todoSchema = new Schema<ITodo>({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    public: {
        type: Boolean,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

export const todoValidation = [
    body(["title", "description", "year"])
        .exists({ checkNull: true, checkFalsy: true })
        .withMessage("Required field is empty"),
    body("year")
        .isLength({ min: 4, max: 4 })
        .withMessage("Year length is 4 symbols"),
];

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;