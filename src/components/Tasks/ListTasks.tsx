import Task from './Task';
import { Skeleton } from '@chakra-ui/react'
import { type Task as TaskType } from '../../types/types'



export default function ListTasks({ tasks = [], loading }: { tasks: TaskType[], loading: boolean }) {

  return (
    <ul className='task__list' style={{ display: 'grid', gap: '1em' }}>
      {
        loading && (
          <>
            <Skeleton isLoaded={!loading}>
              <Task
                id={2}
                name={'test'}
                done={false}
                level={'easy'}
                list={'list'}
                date={'now'}
                isPrincipal={false}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <Task
                id={2}
                name={'test'}
                done={false}
                level={'easy'}
                list={'list'}
                date={'now'}
                isPrincipal={false}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <Task
                id={2}
                name={'test'}
                done={false}
                level={'easy'}
                list={'list'}
                date={'now'}
                isPrincipal={false}
              />
            </Skeleton>
          </>
        )
      }
      {
        !loading && tasks.length === 0 && (
          <p>No tasks yet...</p>
        )
      }

      {
        tasks.length > 0 && (
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
          ))
      }
    </ul>
  );
}
