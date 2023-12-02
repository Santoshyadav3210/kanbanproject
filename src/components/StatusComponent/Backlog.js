import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../CardComponent/TaskCard';
import './Backlog.css'

const Backlog = () => {
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.stage === 'Backlog')
  );

  return (
    <div >
      <h2>Backlog</h2>
      <div className='taskContainer' >
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task}  />
      ))}
      </div>
      
    </div>
  );
};

export default Backlog;
