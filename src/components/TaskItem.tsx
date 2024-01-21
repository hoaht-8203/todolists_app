import { Todo } from '../@types/todo.type';
import IconAM from './Icon/IconAM';
import IconPM from './Icon/IconPM';
import IconDelete from './Icon/IconDelete';
import IconEdit from './Icon/IconEdit';
import PropTypes from 'prop-types';

interface TaskItemProps {
  task: Todo;
  handleDoneTodo: (id: string, isDone: boolean) => void;
  handleDeleteTodo: (id: string) => void;
  startEditTodo: (id: string) => void;
}

const TaskItem = (props: TaskItemProps) => {
  const { task, handleDoneTodo, handleDeleteTodo, startEditTodo } = props;

  const handleChangeCheckbox = (id: string, status: boolean) => {
    handleDoneTodo(id, !status);
  };

  const handleClickDelete = (id: string) => {
    handleDeleteTodo(id);
  };

  return (
    <li className="flex">
      <div
        onClick={() => handleChangeCheckbox(task.id, task.done)}
        className="flex w-[70%] items-center">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4"
          id={task.id}
          checked={task.done}
          onChange={() => handleChangeCheckbox(task.id, task.done)}
        />
        <label
          className={` flex w-full max-w-[90%] items-center justify-between break-words py-2 ps-2 text-[1.2rem] font-medium ${task.done && 'text-gray-300 line-through'}`}
          htmlFor={task.id}>
          {task.name}
          {task.date.getHours() < 12 ? <IconAM size={30} /> : <IconPM size={20} />}
        </label>
      </div>
      <button onClick={() => startEditTodo(task.id)} className="mr-2 rounded-lg border px-3 shadow">
        <IconEdit color="#03a9f4" size={20} />
      </button>
      <button onClick={() => handleClickDelete(task.id)} className="rounded-lg border px-3 shadow">
        <IconDelete color="red" size={20} />
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  handleDoneTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  startEditTodo: PropTypes.func.isRequired
};

export default TaskItem;
