import Task from './Task';
import { type Task as TaskType } from '../../types/types'



export default function ListTasks({ tasks = [] }: { tasks: TaskType[] }) {

  return (
    <ul className='task__list' style={{ display: 'grid', gap: '1em' }}>
      {
        tasks.length ? (
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
            />)
          )) :
          <p>No tasks found</p>
      }
    </ul>
  );
}
