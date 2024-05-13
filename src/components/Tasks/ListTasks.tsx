import Task from './Task';
import { useTasksContext } from '../../hooks/useTasksContext';
import { type Task as TaskType } from '../../types/types'



export default function ListTasks() {
  const { tasks } = useTasksContext();
  // console.log('render list of tasks');


  return (
    <ul className='task__list' style={{ display: 'grid', gap: '1em' }}>
      {
        tasks.map((task: TaskType) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
            level={task.level}
            list={task.list}
            date={task.date}
            isPrincipal={task.isPrincipal}
          />
        ))
      }
    </ul>
  );
}
