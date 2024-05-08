import { useState } from 'react';
import { useTasksContext } from '../hooks/useTasksContext';


export default function AddTaskForm() {
  const { addTask } = useTasksContext();
  const [inputName, setInputName] = useState('');
  console.log('render add Task form');
  const handleSubmitCreateTask = (e) => {
    e.preventDefault();
    addTask({ name: inputName });
    setInputName('');
  };

  return (
    <>
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
    </>
  );
}
