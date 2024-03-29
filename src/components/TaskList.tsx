import { Todo } from '../@types/todo.type';
import connect, { InjectedType } from '../HOC/connect';
import TaskItem from './TaskItem';
import PropsTypes from 'prop-types';

interface TaskListProps extends InjectedType {
  taskList: Todo[];
  handleDoneTodo: (id: string, isDone: boolean) => void;
  handleDeleteTodo: (id: string) => void;
  startEditTodo: (id: string) => void;
}

const TaskList = (props: TaskListProps) => {
  const { taskList, handleDoneTodo, handleDeleteTodo, startEditTodo } = props;

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
        {taskListNotDone.length
          ? taskListNotDone.map((task) => {
              return (
                <TaskItem
                  handleDeleteTodo={handleDeleteTodo}
                  task={task}
                  key={task.id}
                  handleDoneTodo={handleDoneTodo}
                  startEditTodo={startEditTodo}
                />
              );
            })
          : 'Chưa có công việc nào!'}
      </ul>

      <h1 className="mb-3 mt-3 text-2xl font-bold">Đã hoàn thành</h1>
      <ul className="flex flex-col gap-2">
        {taskListDone.length
          ? taskListDone.map((task) => {
              return (
                <TaskItem
                  handleDeleteTodo={handleDeleteTodo}
                  task={task}
                  key={task.id}
                  handleDoneTodo={handleDoneTodo}
                  startEditTodo={startEditTodo}
                />
              );
            })
          : 'Chưa có công việc nào hoàn thành!'}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  taskList: PropsTypes.array.isRequired,
  handleDoneTodo: PropsTypes.func.isRequired,
  handleDeleteTodo: PropsTypes.func.isRequired,
  startEditTodo: PropsTypes.func.isRequired
};

export default connect({ user: { name: 'Hoang Hoa' } })(TaskList);
