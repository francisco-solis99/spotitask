import Task from './Task';
import { useTasksContext } from '../../hooks/useTasksContext';



export default function ListTasks() {
  const { tasks } = useTasksContext();
  console.log('render list of tasks');
  return (
    <ul className='task__list'>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done} />
        )
        )
      }
    </ul>
  );
}
