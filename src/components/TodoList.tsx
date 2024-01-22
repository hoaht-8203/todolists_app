import { useEffect, useState } from 'react';
import { Todo, TodoStorage } from '../@types/todo.type';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Title from './Title';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const todosLocalStorage: TodoStorage[] = JSON.parse(todos);
      const todosList: Todo[] = todosLocalStorage.map((todo) => {
        return {
          ...todo,
          date: new Date(todo.date)
        };
      });
      setTodos(todosList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (name: string) => {
    const todo: Todo = {
      id: new Date().toISOString(),
      name: name,
      done: false,
      date: new Date()
    };
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
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

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id);
    if (findedTodo) setCurrentTodo(findedTodo);
  };

  const editTodo = (newName: string) => {
    if (newName) {
      setCurrentTodo((prevTodo) => {
        if (prevTodo) {
          return {
            ...prevTodo,
            name: newName
          };
        }
        return null;
      });
    } else {
      setCurrentTodo(null);
    }
  };

  const updateTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      });
    });
  };

  console.log('Todolist app re-render');

  return (
    <div className="flex justify-center">
      <div className="mt-5 w-[350px] rounded-lg bg-white p-3 shadow-lg">
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          updateTodo={updateTodo}
        />
        <TaskList
          taskList={todos}
          handleDoneTodo={handleDoneTodo}
          handleDeleteTodo={handleDeleteTodo}
          startEditTodo={startEditTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
