import React from 'react'

const Form = () => {
  return (
    <div className="max-w-[600px] z-20 bg-[#080808] p-8 font-sans text-sm text-white flex flex-col gap-5 box-border rounded-lg shadow-sm shadow-gray-200">

    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
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

  </div>
);
};

export default Form