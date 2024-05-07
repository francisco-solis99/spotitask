import { useState, useEffect } from 'react';
import ListTasks from './components/Tasks/ListTasks';
import Searcher from './components/Searcher/Searcher';
import Container from './components/Container';
import Menu from './components/Menu';

import './App.css';
/*
  Task
    id: number
    name: string
    done: boolean
    date: date
    level: string(easy, medium, hard)
    list: string(List)
    isPrincipal: boolean

  List
    id: number
    name: string
*/
// TODO: change to local storage
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

function App() {
  const [tasks, setTasks] = useState(() => {
    console.log('craeet tasks');
    const savedTasksString = window.localStorage.getItem('spoti-tasks');
    if (!savedTasksString) return DEFAULT_TASKS;
    const savedTasks = JSON.parse(savedTasksString);
    return [...savedTasks];
  });
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    // console.log('execute effect');
    window.localStorage.setItem('spoti-tasks', JSON.stringify(tasks));
  }, [tasks]);


  const handleSubmitCreateTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.at(-1).id + 1,
      name: inputName,
      done: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setInputName('');
  };

  const findTaskIndexById = ({ idTask }) => tasks.findIndex(task => task.id === idTask);

  const deleteTask = ({ idTask }) => {
    const taskIndexToDelete = findTaskIndexById({ idTask });
    const tasksFiltered = tasks.toSpliced(taskIndexToDelete, 1);
    setTasks(tasksFiltered);
  };

  const editTask = ({ idTask, updatedTask }) => {
    console.log(updatedTask);
    const taskIndexToUpdate = findTaskIndexById({ idTask });
    const tasksUpdated = [...tasks];
    tasksUpdated[taskIndexToUpdate] = updatedTask;
    setTasks(tasksUpdated);
  };

  return (
    <>
      <div className='app__wrapper'>
        <header className='app__header'>
          <Container>
            <Searcher />
          </Container>
        </header>
        <Menu />
        <main className='app__content'>
          <Container>
            <form className='form__create-task' style={{ marginBlockEnd: '2em' }} onSubmit={handleSubmitCreateTask}>
              <input
                style={{ color: '#222' }}
                type="text"
                required
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              <button>Add</button>
            </form>
            <ListTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
          </Container>
        </main>
      </div>
    </>
  );

}

export default App;
