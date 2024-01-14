import { Todo } from '../@types/todo.type';
import TaskItem from './TaskItem';

interface TaskListProps {
  taskList: Todo[];
}

const TaskList = (props: TaskListProps) => {
  const { taskList } = props;
  const taskListNotDone = taskList.filter((task) => {
    return !task.done;
  });
  const taskListDone = taskList.filter((task) => {
    return task.done;
  });

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold">Chưa hoàn thành</h1>
      <ul className="flex flex-col gap-2">
        {taskListNotDone.length > 0
          ? taskListNotDone.map((task) => {
              return <TaskItem task={task} key={task.id} />;
            })
          : 'Chưa có công việc nào!'}
      </ul>

      <h1 className="mb-3 mt-3 text-2xl font-bold">Đã hoàn thành</h1>
      <ul className="flex flex-col gap-2">
        {taskListDone.length > 0
          ? taskListDone.map((task) => {
              return <TaskItem task={task} key={task.id} />;
            })
          : 'Chưa có công việc nào hoàn thành!'}
      </ul>
    </div>
  );
};

export default TaskList;
