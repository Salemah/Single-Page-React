import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const handleAddCart = props.handleHired;
    const {name,salaryt,images,faculty,position,} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        
            <div className="product">
            <img src={images} alt="" />
           <h3 className="product-name">{name}</h3>
            <p><small>Fcaulty:{faculty}</small></p>
            <p>Position:{position}</p>
            <p>Salary:${salaryt}</p>
            
           
           
            <button onClick={()=>handleAddCart(props.product)} className="btn" >{element} Hire</button>
           </div>
       
    );
};

export default Product;