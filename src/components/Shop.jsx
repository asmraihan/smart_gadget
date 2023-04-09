import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {

    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext)

    // card button handler
    const handleAddToCart = (product) => {
        let newCart = []
        const exists = cart.find(existingProduct => existingProduct.id === product.id)
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        }else{
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
       toast.success("Item added")
        setCart(newCart)
        addToDb(product.id)
    }


    return (
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                products.map((product) => (<ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>))
            }
        </div>
    );
};

export default Shop;