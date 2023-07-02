import React from 'react';
import InputForm from '../Elements/Input/Index';
import Button from "../Elements/Button/index"

export default function FormLogin() {
    return (
        <form action="">
            <InputForm type="email" placeholder="example@gmail.com" name="email">Email</InputForm>
            <InputForm type="password" placeholder="********" name="password">Password</InputForm>
            <Button classname="bg-blue-600" >Login</Button>
        </form>
    )
}
