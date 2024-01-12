"use client"
import { Fragment, useState } from "react";
import TodoForm from "./TodoForm";
import { TodosList } from "./TodosList";

export default function Page() {
  const [todos, setTodos] = useState<String[]>([])
  
  return (
    <Fragment>
      <TodoForm todos = {todos} setTodos = {setTodos}/>
        <TodosList/>
    </Fragment>
  );
}
