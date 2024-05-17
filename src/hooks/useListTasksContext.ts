import { useContext } from "react";
import { TasksListsContext } from "../context/TasksListsContext";

export function useListsTasksContext() {
  // console.log('Execute order 66 🔍')
  const context = useContext(TasksListsContext);
  if (!context)
    throw new Error("useListsTasksContext was used outside of its Provider");
  return context;
}
