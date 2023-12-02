import React from "react";
import './DashBoard.css'
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const storedData = JSON.parse(localStorage.getItem("formData"));

  console.log(storedData.name);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome {storedData.name}</h1>
      <div>
        <h2>Check Your Task Summary</h2>
        <div className="summary-container">
          <div className="wrapper">
            <h3>Created Task</h3>
          </div>
          <div className="wrapper">
          <h3>Pending Task</h3>
          </div>
          <div className="wrapper">
          <h3>Completed Task</h3>
          </div>
        </div>
      </div>

      <button onClick={()=>{
         navigate("/taskManagement");
      }}>Create New Task</button>
    </div>
  );
}

export default DashBoard;
