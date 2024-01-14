import { Todo } from '../@types/todo.type';
import IconDelete from './Icon/IconDelete';
import IconEdit from './Icon/IconEdit';

interface TaskItemProps {
  task: Todo;
}

const TaskItem = (props: TaskItemProps) => {
  const isDone = 'text-gray-300 line-through';
  const { task } = props;

  return (
    <li className="flex">
      <div className="flex w-[70%] items-center">
        <input type="checkbox" className="mt-1 h-4 w-4" id={task.id} checked={task.done} />
        <label
          className={`max-w-[90%] break-words py-2 ps-2 text-[1.2rem] font-medium`}
          htmlFor={task.id}>
          {task.name}
        </label>
      </div>
      <button className="mr-2 rounded-lg border px-3 shadow">
        <IconEdit color="#03a9f4" size={20} />
      </button>
      <button className="rounded-lg border px-3 shadow">
        <IconDelete color="red" size={20} />
      </button>
    </li>
  );
};

export default TaskItem;
