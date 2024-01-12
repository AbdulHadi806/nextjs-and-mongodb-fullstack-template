import axios from 'axios';
import * as React from 'react';

interface ITodo {
  _id: string,
  status: boolean,
  todo: string,
  __v: Number
}

export function TodosList () {
  const [todos, setTodos] = React.useState<ITodo[]>([])
    const getTodos = async() => {
      try {
        const response = await axios.get('/api');
        const data = response.data
        setTodos(data)
        console.log(data,'response')
      } catch(error) {
        console.log(error, 'error')
      }
    }
    React.useEffect(() => {
      getTodos()
    }, [])
  return (
    <ul className='text-center mt-4'>
      {todos?.map((item,index) => {
        return <li key={item._id}>{index + 1}- {item.todo}</li>
      })}
    </ul>
  );
}
