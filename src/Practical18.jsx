import React from "react";
import { useState } from "react";

function Practical18() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "" || formData.password === "") {
      alert("Enter All Fields!");
      return;
    }

    alert("Registration Successfully Done!");
    console.log("Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Enter Name:
          <input name="name" value={formData.name} onChange={handleChange}/>
        </label>

        <label>Enter Email:
          <input name="email" value={formData.email} onChange={handleChange}/>
        </label>

        <label>Enter Password:
          <input name="password" value={formData.password} onChange={handleChange}/>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Practical18;