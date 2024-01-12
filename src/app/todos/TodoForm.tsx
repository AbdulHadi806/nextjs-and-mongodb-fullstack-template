"use client"
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

interface IAppProps {
    setTodos: Dispatch<SetStateAction<String[]>>;
    todos: String[];
}

export default function TodoForm (props: IAppProps) {
    const {todos, setTodos} = props
  const [todo, setTodo] = useState<String>("")

  const todoSubmitHandler = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api', {
        todo: todo,
      });
      setTodos([...todos, todo])
      console.log(response,'response')
    } catch(error) {
      console.log(error, 'error')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="text-center mt-7">
      <div className="text-2xl">Todo list Next14</div>
      <div>
        <form onSubmit={todoSubmitHandler} className="flex justify-center gap-4">
          <div>
            <input onChange={handleInputChange} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
