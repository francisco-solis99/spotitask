import { useState, useEffect } from 'react';
import { createContext } from 'react';

const DEFAULT_TASKS = [
  {
    id: 1,
    name: 'Clean the window',
    done: false,
  },
  {
    id: 2,
    name: 'Make the dinner',
    done: false,
  }
];

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasksString = window.localStorage.getItem('spoti-tasks');
    if (!savedTasksString) return DEFAULT_TASKS;
    const savedTasks = JSON.parse(savedTasksString);
    return [...savedTasks];
  });

  useEffect(() => {
    // console.log('execute effect');
    window.localStorage.setItem('spoti-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // TODO: change to a reducer
  // Tasks functions
  const addTask = ({ name }) => {
    const newTask = {
      id: tasks.at(-1).id + 1,
      name: name,
      done: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const findTaskIndexById = ({ idTask }) => tasks.findIndex(task => task.id === idTask);

  const deleteTask = ({ idTask }) => {
    const taskIndexToDelete = findTaskIndexById({ idTask });
    const tasksFiltered = tasks.toSpliced(taskIndexToDelete, 1);
    setTasks(tasksFiltered);
  };

  const editTask = ({ idTask, updatedTask }) => {
    const taskIndexToUpdate = findTaskIndexById({ idTask });
    const tasksUpdated = [...tasks];
    tasksUpdated[taskIndexToUpdate] = updatedTask;
    setTasks(tasksUpdated);
  };

  const valueContext = {
    tasks,
    addTask,
    editTask,
    deleteTask
  };

  return (
    <TasksContext.Provider value={valueContext}>
      {children}
    </TasksContext.Provider>
  );
}

