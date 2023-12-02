import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {saveFormData} from '../../action'

function Registration() {
//   const dispatch = useDispatch();
const navigate = useNavigate();

  const initialFormData = {
    name: "",
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { name, userName, email, contactNumber, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch(saveFormData(formData));

    localStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData); 

    setFormData(initialFormData);
    navigate("/login");
    
  };

  return (
    <div className="form_container">
      <form className="form_div" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            // style={{marginLeft: "50px"}}
          />
        </label>
        <label className="label">
          UserName:
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            placeholder="User Name"
            required
            // style={{marginLeft: "50px"}}
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </label>
        <label className="label">
          Contact Number:
          <input
            type="number"
            name="contactNumber"
            value={contactNumber}
            onChange={handleInputChange}
            placeholder="Contact Number"
          />
        </label>
        <label className="label">
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
        <label className="label">
          Profile Image:
          <input type="text" name="profileImage" />
        </label>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default Registration;
