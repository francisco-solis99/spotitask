import { useMemo } from 'react';
import { TasksList } from '../types/types';

import { useListsTasksContext } from '../hooks/useListTasksContext';
import { useTasksContext } from './useTasksContext';


export function useListsTasks({listId = ''} : {listId?: string}) {
  const { lists } = useListsTasksContext()
  const { getTasksByListName } = useTasksContext();


  const listById = useMemo(() => {
    if(!listId) return null;
    const listFound = lists.find((list: TasksList) => list.name.toLowerCase() === listId?.toLowerCase())
    const tasksByListFound = getTasksByListName({listName: listId})
    return {
      ...listFound,
      tasks: tasksByListFound
    };
  }, [lists, listId])

  const listsTasks = useMemo(() => {
    if(listId) return lists;
    const listWithTasks = lists.map((list: TasksList) => {
      const taskByList = getTasksByListName({listName: list.name})
      return {
        ...list,
        tasks: taskByList
      }
    })
    return listWithTasks
  },[lists])



  return {
    lists: listsTasks,
    listByListId: listById
  }
}
