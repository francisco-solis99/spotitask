import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { type Task } from '../types/types'
import useLocalStorage from "../hooks/useLocalStorage";


const ACTIONS_TYPES = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  EDIT_TASK: "EDIT_TASK",
  INIT: "INIT"
} as const

type TaskAction = {
  type: keyof typeof ACTIONS_TYPES
  payload?: Task,
  payloadList?: Task[]
  idTask?: number
}

function tasksReducer(state: Task[], action: TaskAction): Task[] {
  const { type } = action;

  if (type === ACTIONS_TYPES.INIT) {
    if (!action.payloadList) return state;
    return action.payloadList;
  }


  if (type === ACTIONS_TYPES.ADD_TASK) {
    if (!action.payload) return state;
    const newTask = {
      ...action.payload
    };
    return [...state, newTask];
  }

  if (type === ACTIONS_TYPES.DELETE_TASK) {
    if (!action.idTask) return state
    const taskIndexToDelete = state.findIndex(
      (task) => task.id === action.idTask
    );
    const tasksFiltered = state.toSpliced(taskIndexToDelete, 1);
    return tasksFiltered
  }

  if (type === ACTIONS_TYPES.EDIT_TASK) {
    if (!action.idTask || !action.payload) return state
    const taskIndexToEdit = state.findIndex(
      (task) => task.id === action.idTask
    );
    const tasksUpdated = [...state]
    tasksUpdated[taskIndexToEdit] = {
      ...tasksUpdated[taskIndexToEdit],
      ...action.payload
    }
    return tasksUpdated
  }


  return state;

}

export const TasksContext = createContext(null as any);

export function TasksProvider(props: any) {
  const { item, saveItem, loading } = useLocalStorage({ itemName: 'spoti-tasks', initialValue: [] })
  const [tasks, dispatch] = useReducer(tasksReducer, item)

  useEffect(() => {
    dispatch({
      type: ACTIONS_TYPES.INIT,
      payloadList: item
    })
  }, [item]);

  useEffect(() => {
    saveItem(tasks)
  }, [tasks]);


  const addTask = ({ name, level, list, isPrincipal, date }: Task) => {
    dispatch({
      type: ACTIONS_TYPES.ADD_TASK,
      payload: {
        id: (tasks[tasks.length - 1]?.id ?? 1) + 1,
        done: false,
        name,
        level,
        list,
        isPrincipal,
        date
      }
    })
  };

  const deleteTask = ({ idTask }: { idTask: number }) => {
    dispatch({
      type: ACTIONS_TYPES.DELETE_TASK,
      idTask
    })
  };

  const editTask = ({ idTask, updatedTask }: { idTask: number, updatedTask: Task }) => {
    dispatch({
      type: ACTIONS_TYPES.EDIT_TASK,
      payload: updatedTask,
      idTask
    })
  };


  const searchTasks = ({ querySearch, level, priority, status }: { querySearch: string | null, level?: string | null, priority?: string | null, status?: string | null }) => {

    if (!querySearch && !level && !priority && !status) return tasks;

    const isPriority = priority === 'yes'
    const isDone = status === 'yes'

    const tasksSearched = tasks.filter((task) => {
      let shouldInclude = true;

      // Filter by query (case-insensitive)
      if (querySearch && !task.name.toLowerCase().includes(querySearch.toLowerCase())) {
        shouldInclude = false;
      }

      // Filter by level (considering "all")
      if (level && level !== 'all' && task.level?.toLowerCase() !== level) {
        shouldInclude = false;
      }

      // Filter by priority (considering "all")
      if (priority && priority !== 'all' && task.isPrincipal !== isPriority) {
        shouldInclude = false;
      }

      // Filter by status
      if (status && status !== 'all' && task.done !== isDone) {
        shouldInclude = false;
      }

      return shouldInclude;
    })
    return tasksSearched
  }

  const getTasksByListName = ({ listName }: { listName: string }) => {
    if (!listName) throw new Error('listName required')

    const tasksByList = tasks.filter((task) => {
      return task.list?.toLowerCase() === listName.toLowerCase()
    })
    return tasksByList
  }

  const valueContext = {
    tasks,
    loading,
    addTask,
    editTask,
    deleteTask,
    searchTasks,
    getTasksByListName
  };

  return (
    <TasksContext.Provider value={valueContext}>
      {props.children}
    </TasksContext.Provider>
  );
}
