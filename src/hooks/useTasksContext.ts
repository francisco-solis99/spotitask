import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTasksContext() {
  // console.log('Execute order 66 🔍')
  const context = useContext(TasksContext);
  if (!context)
    throw new Error("useTasksContext was used outside of its Provider");
  return context;
}
