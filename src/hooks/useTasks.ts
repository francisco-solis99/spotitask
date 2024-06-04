import {useState, useEffect} from 'react'
import { useTasksContext } from "./useTasksContext";
import { type Task as TaskType } from '../types/types'


export function useTasks({
  querySearch = null,
  level = null,
  priority = null,
  listName = null,
  status = null
 }:
  { querySearch?: string | null,
    level?: string | null,
    priority?: string | null,
    listName?: string | null,
    status?: string | null
  }
  ) {
  const { tasks, searchTasks, getTasksByListName,loading } = useTasksContext();
  const [tasksList, setTaskList] = useState<TaskType[]>(tasks)

  // effect for search some task by name
  useEffect(() => {
    const queryStr = querySearch?.toLowerCase()
    // console.log({
    //   querySearch,
    //   level,
    //   priority,
    //   status
    // });
    const tasksSearched = searchTasks({ querySearch: queryStr, level, priority, status})
    setTaskList(() => tasksSearched)
  }, [querySearch, level, priority, status, tasks])

  // effcet to get the tasks by list name
  useEffect(() => {
    if (!listName || listName === '') {
      return
    }
    const tasksByList = getTasksByListName({ listName })
    setTaskList(() => tasksByList)
  }, [listName, tasks])

  return  {
    tasks: tasksList,
    loading
  }

}
