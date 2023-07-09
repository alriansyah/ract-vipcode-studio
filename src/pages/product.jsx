import React from 'react';
import CardProduct from '../components/Fragments/CardProduct';
export default function ProductPage() {
    return (
        <div className='flex justify-center py-5'>
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000" />
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                    lorem lorem lorem lorem
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000" />
            </CardProduct>
        </div>
    )
}
