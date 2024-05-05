import Task from './Task';

const TASKS = [
  {
    name: 'Clean the window',
    done: false,
  },
  {
    name: 'Make the dinner',
    done: false,
  }
];

export default function ListTasks() {
  return (
    <ul className='task__list'>
      {
        TASKS.map((task, index) => <Task key={index} name={task.name}/>)
      }
    </ul>
  );
}
