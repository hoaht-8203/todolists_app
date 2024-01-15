import React, { useState } from 'react';
import { Todo } from '../@types/todo.type';
import IconEnter from './Icon/IconEnter';

interface TaskInputProps {
  addTodo: (name: string) => void;
  currentTodo: Todo | null;
  editTodo: (newName: string) => void;
  updateTodo: (newTodo: Todo) => void;
}

const TaskInput = (props: TaskInputProps) => {
  const { addTodo, currentTodo, editTodo, updateTodo } = props;
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (currentTodo) editTodo(value);
    else setValue(value);
  };

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentTodo) {
      updateTodo(currentTodo);

      editTodo('');
    }

    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmitTask}>
      <div className="mb-3 mt-3 flex justify-between gap-2">
        <input
          className="w-full rounded-lg border px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter work..."
          value={currentTodo ? currentTodo.name : value}
          onChange={handleChangeValue}
        />
        <button className="rounded-lg border px-3 shadow">
          <IconEnter size={20} />
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
