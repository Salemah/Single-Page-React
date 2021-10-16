import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [produts,setproducts] = useState([]);
    useEffect(()=>{
        fetch('faculty.json')
        .then(res =>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                       produts.map(product=><Product 
                        key={product.id}
                        product={product}></Product>) 
                    }
                    
                </div>
                <div className="cart">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;