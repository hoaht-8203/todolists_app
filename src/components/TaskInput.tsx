import React, { useState } from 'react';
import IconPlus from './Icon/IconPlus';
import IconEnter from './Icon/IconEnter';

interface TaskInputProps {
  addTodo: (name: string) => void;
}

const TaskInput = (props: TaskInputProps) => {
  const { addTodo } = props;
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmitTask = (event: any) => {
    event.preventDefault();
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
          value={value}
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
