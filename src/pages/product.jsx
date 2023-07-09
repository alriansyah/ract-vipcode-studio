import React from 'react';
import CardProduct from '../components/Fragments/CardProduct';


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


export default function ProductPage() {
    return (
        <div className='flex justify-center py-5'>
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    )
}
