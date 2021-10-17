import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} =props;
   let total =0;
   let totalQuantity= 0;
   let name ='';
    for(const product of cart){
      if(!product.quantity){
        product.quantity =1;
      }
        total = total+product.salaryt*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        name = product.name;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Hire Faculty :{totalQuantity}</h3>
            <h6>Faculty Name:{name }</h6>
            <h4 className="total">Total Salary:${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;