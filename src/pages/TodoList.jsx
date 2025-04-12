import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleComplete, setTasks } from '../redux/slices/todoSlice';
import './TodoList.css';

function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('myTasks');
    if (saved) {
      dispatch(setTasks(JSON.parse(saved)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addTask(input));
    setInput('');
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li key={i} className={task.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleComplete(i))}>{task.text}</span>
            <button onClick={() => dispatch(deleteTask(i))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
