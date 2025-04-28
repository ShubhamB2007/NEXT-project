'use client'

import React, { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validateEmail = (email) => {
   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.', {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
   }

  return (
    <div className="max-w-[600px] z-20 bg-[#080808] p-8 font-sans text-sm text-white flex flex-col gap-5 box-border rounded-lg shadow-sm shadow-gray-200">

    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your Full Name"
          required
          className="w-[500px] py-3 pl-6 pr-36 rounded-md font-sans border border-[#333333] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email"
          required
          className="w-[500px] py-3 px-6 rounded-md font-sans border border-[#333333] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="mb-1">Email</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          rows={3}
          placeholder="Enter your message"
          required
          className="w-[500px] py-3 px-6 rounded-md font-sans border border-[#333333] focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="flex justify-center items-center w-full py-3 px-4 bg-[#645bff] text-white text-sm font-sans rounded-md mt-3 hover:bg-[#362cfc] hover:duration-500 cursor-pointer btn-1"
      >
        <span className="absolute inset-0"></span> 
       Submit
      </button>
    </form>
       
      <ToastContainer />
  </div>
);
};

export default Form
