import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../CardComponent/TaskCard';

function ToDo() {

    const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.stage === 'To Do')
  );

  return (
    <div>
      <h2>To Do</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default ToDo