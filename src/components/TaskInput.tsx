import React, { useState } from 'react';
import { Todo } from '../@types/todo.type';
import IconEnter from './Icon/IconEnter';
import PropsTypes from 'prop-types';
import connect, { ExtraInforType } from '../HOC/connect';
import { debug, log } from '../constants';

interface TaskInputProps extends ExtraInforType {
  addTodo: (name: string) => void;
  currentTodo: Todo | null;
  editTodo: (newName: string) => void;
  updateTodo: (newTodo: Todo) => void;
}

const TaskInput = (props: TaskInputProps) => {
  const { addTodo, currentTodo, editTodo, updateTodo, debug, log } = props;
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

TaskInput.propTypes = {
  addTodo: PropsTypes.func.isRequired,
  currentTodo: PropsTypes.oneOfType([
    PropsTypes.shape({
      id: PropsTypes.string.isRequired,
      name: PropsTypes.string.isRequired,
      done: PropsTypes.bool.isRequired,
      date: PropsTypes.instanceOf(Date).isRequired
    }),
    PropsTypes.oneOf([null])
  ]),
  editTodo: PropsTypes.func.isRequired,
  updateTodo: PropsTypes.func.isRequired
};

export default connect({ debug: debug, log: log })<TaskInputProps>(TaskInput);
