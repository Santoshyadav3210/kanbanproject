import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, setError } from '../../actions/taskActions';
import { useNavigate } from "react-router-dom";
import Backlog from '../StatusComponent/Backlog';
import './TaskForm.css'
import InProgress from '../StatusComponent/InProgress';
import ToDo from '../StatusComponent/ToDo';
import Done from '../StatusComponent/Done';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');
  const [stage, setStage] = useState('0');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !priority || !deadline || !stage) {
      dispatch(setError('Please fill in all fields.'));
    } else {
      let stageName;
      switch (stage.toLowerCase()) {
        case '0':
          stageName = 'Backlog';
          break;
        case '1':
          stageName = 'To Do';
          break;
        case '2':
          stageName = 'In Progress';
          break;
        case '3':
          stageName = 'Done';
          break;
        default:
          dispatch(setError('Invalid stage input'));
          return;
      }

      const newTask = {
        id: uuidv4(),
        name: taskName,
        stage: stageName,
        priority,
        deadline,
      };

      dispatch(addTask(newTask));
      setTaskName('');
      setPriority('');
      setDeadline('');
      setStage('0');
    }
  };

  return (
    <>
    <div className='mainContainer'>
    <h1>Create Task</h1>
     <form onSubmit={handleSubmit} className='form-container'>
      <div className='input-div'>
        <label style={{fontSize:"20px"}}>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{height:"40px"}}
        />
      </div>
      <div className='input-div'>
        <label style={{fontSize:"20px"}}>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{height:"40px"}}>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className='input-div'>
        <label  style={{fontSize:"20px"}}>Deadline:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{height:"40px"}}
        />
      </div>
      <div className='input-div'>
        <label style={{fontSize:"20px"}}>Stage:</label>
        <input
          type="text"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          style={{height:"40px"}}
        />
      </div>
      <button type="submit">Create Task</button>
      <button onClick={()=>{
         navigate("/dashboard");
      }}>Check Summary</button>
    </form>
    
    {error && <h3 style={{color:"red",paddingTop:"20px"}}>{error}</h3>}
    </div>
    <div className='progressContainer'>
        <div className='backLogContainer'>
        <Backlog/>
        </div>
        <div className='backLogContainer'>
        <ToDo/>
        </div>
        <div className='backLogContainer'>
        <InProgress/>
        </div>
        <div className='backLogContainer'>
        <Done/>
        </div>
 
    
    </div>
   </>
  );
};

export default TaskForm;
