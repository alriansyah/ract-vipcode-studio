import React from "react";
import Button from "./components/Elements/Button";

export default function App() {
  return (
    <div className='flex justify-center gap-4 bg-blue-700 min-h-screen items-center'>
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Register</Button>
      <Button variant="bg-black">Logout</Button>
    </div>
  )
}
