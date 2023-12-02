import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../CardComponent/TaskCard';

function Done() {
    const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.stage === 'Done')
  );
  return (
    <div>
      <h2>Done</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default Done