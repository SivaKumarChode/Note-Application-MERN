import React, { useState } from 'react';
import axiosInstance from '../apis/Api';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [Register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setRegister({ ...Register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register", Register);
      console.log("response--->", response);
      console.log("response data---> ", response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='UserName' 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email' 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Password' 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <h5 className="text-center mt-4 text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-blue-500 hover:underline"> Please Login</Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
