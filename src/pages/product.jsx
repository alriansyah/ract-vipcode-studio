import React, { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';


const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: "Rp. 1.000.000",
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
        title: "Sepatu Lama",
        price: "Rp. 500.000",
        image: "/images/shoes.jpg",
        description: `lorem lorem lorem lorem
        lorem lorem lorem lorem`
    },
    {
        id: 3,
        title: "Sepatu Lama",
        price: "Rp. 500.000",
        image: "/images/shoes.jpg",
        description: `lorem lorem lorem lorem
        lorem lorem lorem lorem`
    },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
}


export default function ProductPage() {
    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-2'>
                {email}
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className='flex justify-center py-5'>
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    )
}
