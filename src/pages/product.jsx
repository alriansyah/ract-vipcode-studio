import React, { Fragment, useState, useEffect, useContext } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode';

export default function ProductPage() {
    const { isDarkMode, setiSDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        })
    }, []);

    return (
        <Fragment>
            <Navbar></Navbar>
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-8/12 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} id={product.id} />
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className='w-4/12'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
                    <TableCart products={products} ></TableCart>
                </div>
            </div>

            {/* <div className="mt-5 flex justify-center mb-10">
                <Counter />
            </div> */}
        </Fragment>
    )
}
