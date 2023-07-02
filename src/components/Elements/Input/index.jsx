import React from 'react';
import Label from './Label';
import Input from './Input';

export default function InputForm(props) {
    const { children, type, name, placeholder } = props;

    return (
        <div className="mb-6">
            <Label htmlFor={name}>{children}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div >
    )
}
