import {useState, useEffect} from 'react'
import { useTasksContext } from "./useTasksContext";
import { type Task as TaskType } from '../types/types'


export function useTasks({querySearch = null, listName = null}: {querySearch?: string | null, listName?: string | null}) {
  const { tasks, searchTasks, getTasksByListName } = useTasksContext();
  const [tasksList, setTaskList] = useState<TaskType[]>(tasks)

  // effect for search some task by name
  useEffect(() => {
    if (!querySearch || querySearch === '') {
      setTaskList(tasks)
      return
    }
    const queryStr = querySearch?.toLowerCase()
    const tasksSearched = searchTasks({ querySearch: queryStr })
    setTaskList(() => tasksSearched)
  }, [querySearch, tasks])

  // effcet to get the tasks by list name
  useEffect(() => {
    if (!listName || listName === '') {
      return
    }
    const tasksByList = getTasksByListName({ listName })
    setTaskList(() => tasksByList)
  }, [listName, tasks])

  return  {
    tasks: tasksList
  }

}
