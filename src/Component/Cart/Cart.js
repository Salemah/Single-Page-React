import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} =props;
    console.log(cart);
    return (
        <div>
            {/* <h1>Hire Faculty:{cart.name}</h1> */}
        </div>
    );
};

export default Cart;