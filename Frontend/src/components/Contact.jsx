import React from 'react'
import {} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Contact() {const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center ">
    <div className="w-[450px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">

    <h3 className="font-bold text-lg">Contact Us</h3>
    {/* Name */}
    <div className="mt-4 space-y-2 ">
        <span>Name
        </span>
        <br/>
        <input type="text" placeholder="Enter your Name"
         className="w-80 px-3 border rounded-md outline-none"
         {...register("name", { required: true })} />
         <br />
         {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/* Email */}
    <div className="mt-4 space-y-2 ">
        <span>Email
        </span>
        <br/>
        <input type="email" placeholder="Enter your email"
         className="w-80 px-3 border rounded-md outline-none"
         {...register("email", { required: true })}/>
         <br />
         {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
   {/* Message */}
<div className="mt-4 space-y-2">
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
    Message
  </label>
  <textarea
    id="message"
    rows="4"
    placeholder='Type Ypur Message'
    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    {...register("message", { required: true })}
  />
  {errors.message && (
    <span className="text-sm text-red-500">This field is required</span>
  )}
</div>

{/* Button */}
<div className="flex justify-around mt-5">
  <button
    type="submit"
    className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200"
  >
    Submit
  </button>
</div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Contact
