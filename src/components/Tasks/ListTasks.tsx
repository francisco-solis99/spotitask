import { useEffect, useState } from 'react';
import Task from './Task';
import { useTasksContext } from '../../hooks/useTasksContext';
import { type Task as TaskType } from '../../types/types'



export default function ListTasks({ querySearch }: { querySearch?: string | null }) {
  const { tasks, searchTasks } = useTasksContext();
  const [tasksList, setTaskList] = useState<TaskType[]>([])

  useEffect(() => {
    // console.log({ querySearch });
    if (!querySearch || querySearch === '') {
      setTaskList(() => tasks)
      return
    }
    const queryStr = querySearch?.toLowerCase()
    const tasksSearched = searchTasks({ querySearch: queryStr })
    setTaskList(() => tasksSearched)
  }, [querySearch, tasks])

  return (
    <ul className='task__list' style={{ display: 'grid', gap: '1em' }}>
      {
        tasksList.length ? (
          tasksList.map((task: TaskType) => (
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
          <p>No search results</p>
      }
    </ul>
  );
}
