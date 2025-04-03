import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../apis/Api';

const Login = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", Login);
      console.log("response--->", response);
      console.log("response data--->", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.existsUser.username);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>
        <h5 className="text-center mt-4 text-gray-600">
          Don't have an account? 
          <Link to="/register" className="text-blue-500 hover:underline"> Please Register</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;