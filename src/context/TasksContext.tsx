import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { type Task } from '../types/types'

const initialState: Task[] = []

const ACTIONS_TYPES = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  EDIT_TASK: "EDIT_TASK",
} as const

type TaskAction = {
  type: keyof typeof ACTIONS_TYPES
  payload?: Task
  idTask?: number
}

function tasksReducer(state: Task[], action: TaskAction): Task[] {
  const { type } = action;

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

const initialTasksCb = (initialState: Task[]) => {
  const savedTasksString = window.localStorage.getItem("spoti-tasks");
  if (!savedTasksString) return initialState;
  const savedTasks = JSON.parse(savedTasksString);
  return savedTasks
}


export const TasksContext = createContext(null as any);
export function TasksProvider(props: any) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState, initialTasksCb)

  useEffect(() => {
    window.localStorage.setItem("spoti-tasks", JSON.stringify(tasks));
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

  const valueContext = {
    tasks,
    addTask,
    editTask,
    deleteTask,
  };

  return (
    <TasksContext.Provider value={valueContext}>
      {props.children}
    </TasksContext.Provider>
  );
}
