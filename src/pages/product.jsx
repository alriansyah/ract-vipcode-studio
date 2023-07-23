import React, { Fragment, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';


const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes.jpg",
        description: `lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem
        lorem lorem lorem lorem`
    },
    {
        id: 2,
        name: "Sepatu Adidas",
        price: 500000,
        image: "/images/shoes.jpg",
        description: `lorem lorem lorem lorem
        lorem lorem lorem lorem`
    },
    {
        id: 3,
        name: "Sepatu Nike",
        price: 900000,
        image: "/images/shoes.jpg",
        description: `lorem lorem lorem lorem
        lorem lorem lorem lorem`
    },
];

const email = localStorage.getItem("email");

export default function ProductPage() {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { id, qty: 1 }]);

        }
    }

    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-2'>
                {email}
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className='flex justify-center py-5'>
                <div className="w-8/12 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className='w-4/12'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
                    <table className='text-left table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-5 flex justify-center mb-10">
                <Counter />
            </div>
        </Fragment>
    )
}
