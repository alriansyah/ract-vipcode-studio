import React from "react";

const Button = (props) => {
  const { children = "....", variant = "bg-black" } = props;

  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {children}
    </button>
  )
}



export default function App() {
  return (
    <div className='flex justify-center gap-4 bg-blue-700 min-h-screen items-center'>
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Register</Button>
      <Button variant="bg-black">Logout</Button>
    </div>
  )
}
