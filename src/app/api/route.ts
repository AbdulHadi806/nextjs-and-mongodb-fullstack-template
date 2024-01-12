import { NextRequest, NextResponse } from "next/server";
import Todo from "../model/todo";
import { connection } from "../db/conn";

connection();

export async function POST(req: NextRequest) {
    try {
        const rawBody = await req.json();
        const {todo} = rawBody;
        const newTodo = new Todo();
        newTodo.todo = todo;
        newTodo.status = false;
       await newTodo.save();
        return NextResponse.json({message: "Todo added", newTodo});
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: err, status: false});
    }
}

export async function GET(req: NextRequest) {
    try {
        const todos = await Todo.find();
        return NextResponse.json(todos);
    } catch(err) {
        return NextResponse.json({message: err, status: false});
    }
}