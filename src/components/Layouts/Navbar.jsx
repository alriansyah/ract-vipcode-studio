import React, { useEffect, useState, useContext } from 'react';
import Button from '../Elements/Button';
import { useLogin } from '../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';

export default function Navbar() {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setiSDarkMode } = useContext(DarkMode);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-2'>
            {username}
            <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5'>
                {totalCart}
            </div>
            <Button
                className='bg-black px-10  mx-5text-white rounded'
                onClick={() => setiSDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "Light" : "Dark"}
            </Button>
        </div>
    )
}
