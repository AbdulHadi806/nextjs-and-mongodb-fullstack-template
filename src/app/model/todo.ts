import mongoose, { Document, Model, Schema } from "mongoose";

interface ITodoDocument extends Document {
    todo: string;
    status: boolean;
}

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
});


const Todo = mongoose.models.Todo || mongoose.model<ITodoDocument>("Todo", TodoSchema);

export default Todo;
