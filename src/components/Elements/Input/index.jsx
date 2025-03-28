import React from 'react';
import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

const InputForm = forwardRef((props, ref) => {
    const { children, type, name, placeholder } = props;

    return (
        <div className="mb-6">
            <Label htmlFor={name}>{children}</Label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={ref}
            />
        </div >
    )
})


export default InputForm;