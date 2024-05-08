import { useState } from 'react';
import { useTasksContext } from '../../hooks/useTasksContext';


export default function Task({ id, name, done = false }) {
  const { editTask, deleteTask } = useTasksContext();
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(name);
  const [isDone, setIsDone] = useState(done);

  const handleDeleteTask = () => {
    deleteTask({ idTask: id });
  };

  const handleSaveEditTask = () => {
    const updatedTask = {
      id,
      name: taskName,
      done: isDone
    };
    editTask({ idTask: id, updatedTask });
    setIsEditing(false);
  };

  const handleDoneTask = (e) => {
    setIsDone(() => e.target.checked);
    const updatedTask = {
      id,
      name: taskName,
      done: e.target.checked
    };
    editTask({ idTask: id, updatedTask });
    setIsEditing(false);
  };

  const handleEditTask = () => setIsEditing(true);
  const handleCancelEditTask = () => {
    setIsEditing(false);
    setTaskName(name);
  };

  return (
    <li>
      <article style={{ display: 'flex', gap: '1em' }}>
        <label htmlFor={`task-${id}`}>
          <input type="checkbox" id={`task-${id}`} onChange={handleDoneTask} checked={isDone} />
          {
            isEditing ? (
              <input
                type="text"
                style={{ color: '#333' }}
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{name}</span>
            )
          }
        </label>

        {/* Actions btns */}
        <div>
          {
            isEditing ? (
              <>
                <button onClick={handleSaveEditTask}>✅</button>
                <button onClick={handleCancelEditTask}>⬅️</button>
              </>
            ) : (
              <>
                <button onClick={handleDeleteTask}>🗑️</button>
                <button onClick={handleEditTask}>✏️</button>
              </>
            )
          }
        </div>
      </article>
    </li>
  );
}
