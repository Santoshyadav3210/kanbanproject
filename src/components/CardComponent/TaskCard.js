import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../actions/taskActions";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState({ ...task });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleNext = () => {
    let updatedStage;

    switch (task.stage) {
      case "Backlog":
        updatedStage = "To Do";
        break;
      case "To Do":
        updatedStage = "In Progress";
        break;
      case "In Progress":
        updatedStage = "Done";
        break;
      case "Done":
        updatedStage = "Done";
        break;
      default:
        break;
    }

    const updatedTask = {
      ...task,
      stage: updatedStage,
    };

    dispatch(updateTask(updatedTask));
  };
  const handlePrevious = () => {
    let updatedStage;

    switch (task.stage) {
      case "Backlog":
        updatedStage = "Backlog";
        break;
      case "To Do":
        updatedStage = "Backlog";
        break;
      case "In Progress":
        updatedStage = "To Do";
        break;
      case "Done":
        updatedStage = "In Progress";
        break;
      default:
        break;
    }

    const updatedTask = {
      ...task,
      stage: updatedStage,
    };

    dispatch(updateTask(updatedTask));
  };

  return (
    <div className="task-container">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="stage"
            value={editedTask.stage}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="priority"
            value={editedTask.priority}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="deadline"
            value={editedTask.deadline}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="task-card">
          <h3>{task.name}</h3>
          <h6>Stage: {task.stage}</h6>
          <h6>Priority: {task.priority}</h6>
          <h6>Deadline: {task.deadline}</h6>
          <div className="buttonContainer" >
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          
            {task.stage !== "Backlog" && (
              <button onClick={handlePrevious}>Previous</button>
            )}
              {task.stage !== "Done" && (
              <button onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
