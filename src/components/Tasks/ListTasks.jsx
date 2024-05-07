import Task from './Task';


export default function ListTasks({ tasks, deleteTask, editTask }) {
  return (
    <ul className='task__list'>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
            deleteTaskCb={deleteTask}
            editTaskCb={editTask} />
        )
        )
      }
    </ul>
  );
}
