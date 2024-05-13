import { useState, useEffect } from "react";
import { createContext } from "react";
import { type Task } from '../types/types'

const DEFAULT_TASKS: Task[] = [
  // {
  //   id: 1,
  //   name: "Clean the window",
  //   done: false,
  // },
  // {
  //   id: 2,
  //   name: "Make the dinner",
  //   done: false,
  // },
];

export const TasksContext = createContext(null as any);


export function TasksProvider(props: any) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasksString = window.localStorage.getItem("spoti-tasks");
    if (!savedTasksString) return DEFAULT_TASKS;
    const savedTasks = JSON.parse(savedTasksString);
    return [...savedTasks];
  });

  useEffect(() => {
    window.localStorage.setItem("spoti-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // TODO: change to a reducer
  // Tasks functions
  const addTask = ({ name, level, list, isPrincipal, date }: Task) => {
    // console.log({ name, level, list, isPrincipal, date })
    const newTask = {
      id: (tasks[tasks.length - 1]?.id ?? 1) + 1,
      name: name,
      done: false,
      date,
      level,
      list,
      isPrincipal,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const findTaskIndexById = ({ idTask }: { idTask: number }) =>
    tasks.findIndex((task) => task.id === idTask);

  const deleteTask = ({ idTask }: { idTask: number }) => {
    const taskIndexToDelete = findTaskIndexById({ idTask });
    const tasksFiltered = tasks.toSpliced(taskIndexToDelete, 1);
    setTasks(tasksFiltered);
  };

  const editTask = ({ idTask, updatedTask }: { idTask: number, updatedTask: Task }) => {
    const taskIndexToUpdate = findTaskIndexById({ idTask });
    const tasksUpdated = [...tasks];
    tasksUpdated[taskIndexToUpdate] = { ...updatedTask, id: idTask };
    setTasks(tasksUpdated);
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
