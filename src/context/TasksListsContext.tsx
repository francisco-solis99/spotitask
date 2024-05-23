import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { type TasksList } from '../types/types'

const initialState: TasksList[] = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Study',
  }
]

const ACTIONS_TYPES = {
  ADD_LIST: "ADD_LIST",
  DELETE_LIST: "DELETE_LIST"
} as const

type ListAction = {
  type: keyof typeof ACTIONS_TYPES
  payload?: TasksList
  idList?: number
  idTask?: number
}

export const TasksListsContext = createContext(null as any);

function listReducer(state: TasksList[], action: ListAction) {
  const { type } = action;

  if (type === ACTIONS_TYPES.ADD_LIST) {
    if (!action.payload) return state;
    const newList = {
      ...action.payload
    };
    return [...state, newList];
  }

  if (type === ACTIONS_TYPES.DELETE_LIST) {
    if (!action.idList) return state
    const listIndexToDelete = state.findIndex(
      (task) => task.id === action.idList
    );
    const listsFiltered = state.toSpliced(listIndexToDelete, 1);
    return listsFiltered
  }

  // if (type === ACTIONS_TYPES.ADD_TASK_TO_LIST) {
  //   if (!action.idTask || !action.idList) return state;
  //   const listIndex = state.findIndex(
  //     (task) => task.id === action.idList
  //   );
  //   const listsUpdated = [...state]
  //   listsUpdated[listIndex].tasksIds.push(action.idTask)
  //   return [listsUpdated];
  // }

  // if (type === ACTIONS_TYPES.DELETE_TASK_TO_LIST) {
  //   if (!action.idTask || !action.idList) return state;
  //   const listIndex = state.findIndex(
  //     (task) => task.id === action.idList
  //   );
  //   const listsUpdated = [...state]
  //   const taskIdsUpdated = listsUpdated[listIndex].tasksIds.filter(taskId => taskId !== action.idTask)
  //   listsUpdated[listIndex].tasksIds = taskIdsUpdated;
  //   return [listsUpdated];
  // }


  return state
}

const initialListsCb = (initialState: TasksList[]) => {
  const savedListsString = window.localStorage.getItem("spoti-lists");
  if (!savedListsString) return initialState;
  const savedLists = JSON.parse(savedListsString);
  return savedLists
}

export function ListsProvider(props: any) {
  const [lists, dispatch] = useReducer(listReducer, initialState, initialListsCb);

  useEffect(() => {
    window.localStorage.setItem("spoti-lists", JSON.stringify(lists));
  }, [lists]);


  const addList = ({ name }: TasksList) => {
    // console.log({ name, level, list, isPrincipal, date })
    dispatch({
      type: ACTIONS_TYPES.ADD_LIST,
      payload: {
        id: (lists[lists.length - 1]?.id ?? 1) + 1,
        name,
      }
    })
  };

  const deleteList = ({ idList }: { idList: number }) => {
    dispatch({
      type: ACTIONS_TYPES.DELETE_LIST,
      idList
    })
  };



  const valueContext = {
    lists,
    addList,
    deleteList
  };

  return (
    <TasksListsContext.Provider value={valueContext}>
      {props.children}
    </TasksListsContext.Provider>
  );
}
