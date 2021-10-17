import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../Utilitis/Storage';
import './Shop.css'

const Shop = () => {
    const [produts,setproducts] = useState([]);
    const [cart,setcart] = useState([]);
    useEffect(()=>{
        console.log('api called')
        fetch('faculty.json')
        .then(res =>res.json())
        .then(data=>{
            console.log('datat recidv')
            setproducts(data)})
    },[])
  
   useEffect(()=>{
       console.log('another');
   if(produts.length){
    const savedCart = getStoredCart();
    const storedCart = [];
    for (const id in savedCart){

    const addedproduct =produts.find(product => product.id === id);
     storedCart.push(addedproduct);
   }
   setcart(storedCart);
    
    }
},[produts])
const handleHired = product=>{
    const newCart = [...cart,product];
    setcart(newCart);
    //save to local storage
    addToDb(product.id);
   }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                       produts.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleHired= {handleHired}></Product>) 
                    }
                    
                </div>
                <div className="cart">
                    <Cart cart ={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;