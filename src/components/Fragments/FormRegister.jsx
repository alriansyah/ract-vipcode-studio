import React from 'react';
import InputForm from '../Elements/Input/Index';
import Button from "../Elements/Button/index"

export default function FormRegister() {
    return (
        <form action="">
            <InputForm type="text" placeholder="insert your name here..." name="fullname">Fullname</InputForm>
            <InputForm type="email" placeholder="example@gmail.com" name="email">Email</InputForm>
            <InputForm type="password" placeholder="********" name="password">Password</InputForm>
            <InputForm type="password" placeholder="********" name="confirmPassword">Confirm Password</InputForm>
            <Button classname="bg-blue-600" >Register</Button>
        </form>
    )
}
