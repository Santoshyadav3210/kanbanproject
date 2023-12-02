import React from "react";
// import TaskForm from "./TaskForm/TaskForm";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home() {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToregister = () => {
    navigate("/registration");
  };
  return (
    <div className="container">
    <div >
      <h1>Kanban Board</h1>
    </div>
    <div className="btn-conatiner">
      <button onClick={navigateToLogin} className="login-btn">
        Login
      </button>
      <br></br>
      <button onClick={navigateToregister} className="register-btn">
        Sign In
      </button>
    </div>
</div>
  );
}

export default Home;
