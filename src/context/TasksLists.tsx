// import { useEffect, useReducer } from "react";
// import { createContext } from "react";
// import { type TasksList } from '../types/types'

// const DEFAULT_LISTS: TasksList[] = [
//   {
//     id: 1,
//     name: 'Home',
//     tasksIds: []
//   },
//   {
//     id: 2,
//     name: 'Study',
//     tasksIds: []
//   },
// ];

// export const ListsContext = createContext(null as any);

// function listReducer(state: TasksList[], action: any) {


// }

// export function ListsProvider(props: any) {
//   const [stateLists, dispatch] = useReducer(listReducer, { lists: [] });

//   // useEffect(() => {
//   //   window.localStorage.setItem("spoti-lists", JSON.stringify(stateLists));
//   // }, [stateLists]);


//   // const addTask = ({ name, level, list, isPrincipal, date }: Task) => {
//   //   // console.log({ name, level, list, isPrincipal, date })
//   //   const newTask = {
//   //     id: (tasks[tasks.length - 1]?.id ?? 1) + 1,
//   //     name: name,
//   //     done: false,
//   //     date,
//   //     level,
//   //     list,
//   //     isPrincipal,
//   //   };
//   //   setTasks((prevTasks) => [...prevTasks, newTask]);
//   // };

//   // const findTaskIndexById = ({ idTask }: { idTask: number }) =>
//   //   tasks.findIndex((task) => task.id === idTask);

//   // const deleteTask = ({ idTask }: { idTask: number }) => {
//   //   const taskIndexToDelete = findTaskIndexById({ idTask });
//   //   const tasksFiltered = tasks.toSpliced(taskIndexToDelete, 1);
//   //   setTasks(tasksFiltered);
//   // };

//   // const editTask = ({ idTask, updatedTask }: { idTask: number, updatedTask: Task }) => {
//   //   const taskIndexToUpdate = findTaskIndexById({ idTask });
//   //   const tasksUpdated = [...tasks];
//   //   tasksUpdated[taskIndexToUpdate] = { ...updatedTask, id: idTask };
//   //   setTasks(tasksUpdated);
//   // };

//   // const valueContext = {
//   //   tasks,
//   //   addTask,
//   //   editTask,
//   //   deleteTask,
//   // };

//   // return (
//   //   <TasksContext.Provider value={valueContext}>
//   //     {props.children}
//   //   </TasksContext.Provider>
//   // );
// }
