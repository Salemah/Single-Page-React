import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../Utilitis/Storage';
import './Shop.css'

const Shop = () => {
    const [produts,setproducts] = useState([]);
    const [cart,setcart] = useState([]);
    const [displayproduct,setDisplayproduct] = useState([]);
    useEffect(()=>{
        fetch('faculty.json')
        .then(res =>res.json())
        .then(data=>{
            setproducts(data)
            setDisplayproduct(data)})
    },[])
  
   useEffect(()=>{
      
   if(produts.length){
    const savedCart = getStoredCart();
    const storedCart = [];
    for (const id in savedCart){

    const addedproduct =produts.find(product => product.id === id);
     
     if(addedproduct){
         const quantity = savedCart[id];
         addedproduct.quantity = quantity;
        storedCart.push(addedproduct);
    }
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
   const handleSearch =event =>{
       const searchValue  = event.target.value;
       const matcedValue = produts.filter(product =>product.name.toLowerCase().includes(searchValue.toLowerCase()) )
       setDisplayproduct(matcedValue);
   }
    return (
        <div>
            <div className="search-container">
                <input
                onChange={handleSearch} 
                className="sarrchh" type="text" placeholder="search faculty" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                       displayproduct.map(product=><Product 
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