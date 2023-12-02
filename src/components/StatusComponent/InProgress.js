import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../CardComponent/TaskCard';
function InProgress() {
    const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.stage === 'In Progress')
  );
  return (
    <div>
      <h2>In Progress</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default InProgress