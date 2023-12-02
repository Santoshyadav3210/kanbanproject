import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const initialFormData = {
    userName: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { userName, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    
    const storedData = JSON.parse(localStorage.getItem("formData"));

    if (storedData) {
     
      if (userName === storedData.name && password === storedData.password) {
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid username or password");
       
      }
    } else {
      alert("User not found. Please register first.");
      navigate("/registration");
    }
  
    setFormData(initialFormData);
  };

  return (
    <div className="form_container">
      <form className="form_div" onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <label>
          UserName:
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            placeholder="User Name"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
        </label>
        <input type="submit" value="Login" className="submit-btn" />
      </form>
    </div>
  );
}

export default Login;
