import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export default function App() {
  return (
    <div className='flex justify-center gap-4 min-h-screen items-center'>
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  )
}