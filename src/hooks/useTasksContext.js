import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context) throw new Error('useTasksContext was used outside of its Provider');
  return context;
}