import React from 'react';
import InputForm from '../Elements/Input/Index';
import Button from "../Elements/Button/index"
import { useRef, useEffect } from 'react';

export default function FormLogin() {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    window.location.href = "/products";
  }
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <InputForm type="email" placeholder="example@gmail.com" name="email" ref={emailRef}>Email</InputForm>
      <InputForm type="password" placeholder="********" name="password">Password</InputForm>
      <Button classname="bg-blue-600" type="submit">Login</Button>
    </form>
  )
}
