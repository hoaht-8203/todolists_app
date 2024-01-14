import { useState } from 'react';
import { Todo } from '../@types/todo.type';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    const todo: Todo = {
      id: new Date().toISOString(),
      name: name,
      done: false,
      date: new Date().toLocaleDateString()
    };
    setTodos([...todos, todo]);
  };

  const handleDoneTodo = (id: string, isDone: boolean) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: isDone
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="flex justify-center">
      <div className="mt-5 w-[350px] rounded-lg bg-white p-3 shadow-lg">
        <h1 className="text-2xl font-bold">To do list typescript</h1>
        <TaskInput addTodo={addTodo} />
        <TaskList taskList={todos} />
      </div>
    </div>
  );
};

export default TodoList;
