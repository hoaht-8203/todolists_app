import { useEffect, useReducer, useState } from 'react';
import { Todo, TodoStorage } from '../@types/todo.type';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

type TodoAction =
  | { type: 'add_todo'; payload: Todo }
  | { type: 'done_todo'; payload: { id: string; isDone: boolean } }
  | { type: 'delete_todo'; payload: string }
  | { type: 'update_todo'; payload: Todo };

const todo_reducer = (state: Todo[], action: TodoAction) => {
  if (action.type === 'add_todo') {
    return [...state, action.payload];
  }
  if (action.type === 'done_todo') {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          done: action.payload.isDone
        };
      }
      return todo;
    });
  }
  if (action.type === 'delete_todo') {
    return state.filter((todo) => {
      return todo.id !== action.payload;
    });
  }
  if (action.type === 'update_todo') {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return action.payload;
      }
      return todo;
    });
  }
  throw new Error(`Invalid Action ${action}`);
};

const initTodoList = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    const todosLocalStorage: TodoStorage[] = JSON.parse(todos);
    const todosList: Todo[] = todosLocalStorage.map((todo) => {
      return {
        ...todo,
        date: new Date(todo.date)
      };
    });
    return todosList;
  }
  return [];
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todo_reducer, [], initTodoList);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

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
    dispatch({ type: 'add_todo', payload: todo });
  };

  const handleDoneTodo = (id: string, isDone: boolean) => {
    dispatch({ type: 'done_todo', payload: { id: id, isDone: isDone } });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: 'delete_todo', payload: id });
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
    dispatch({ type: 'update_todo', payload: newTodo });
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
