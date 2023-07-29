import React from 'react';
import InputForm from '../Elements/Input/Index';
import Button from "../Elements/Button/index"
import { useRef, useState, useEffect } from 'react';
import { login } from '../../services/auth.service';

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" type="username" placeholder="Jhon Doe" name="username" ref={usernameRef}>Email</InputForm>
      <InputForm type="password" placeholder="********" name="password">Password</InputForm>
      <Button classname="bg-blue-600" type="submit">Login</Button>
      {loginFailed &&
        <p className='text-red-500 text-center mt-5'>{loginFailed}</p>
      }
    </form>
  )
}
