import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { type TasksList } from '../types/types'
import useLocalStorage from "../hooks/useLocalStorage";

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

  return state
}


export function ListsProvider(props: any) {
  const { item, saveItem } = useLocalStorage({ itemName: 'spoti-lists', initialValue: [] })
  const [lists, dispatch] = useReducer(listReducer, item);

  useEffect(() => {
    saveItem(lists)
  }, [lists]);


  const addList = ({ name }: TasksList) => {
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
