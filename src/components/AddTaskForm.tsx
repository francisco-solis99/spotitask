import { useTasksContext } from '../hooks/useTasksContext';
import TaskForm from './TaskForm';
import { Task } from '../types/types';

export default function AddTaskForm() {
  const { addTask } = useTasksContext();
  // console.log('render add Task form');

  const handleSubmitCreateTask = ({ newTask }: { newTask: Task }) => {
    addTask({ ...newTask });
  };

  return (
    <>
      <TaskForm callback={handleSubmitCreateTask} mode='add' task={null} />
    </>
  );
}
