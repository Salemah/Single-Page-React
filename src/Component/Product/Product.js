import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,salaryt,id,images,faculty,position,} = props.product;

    return (
        
            <div className="product">
            <img src={images} alt="" />
           <h3 className="product-name">{name}</h3>
            <p><small>Fcaulty:{faculty}</small></p>
            <p>Position:{position}</p>
            <p>Price:${salaryt}</p>
            
           
           
            <button className="btn" >Hire</button>
           </div>
       
    );
};

export default Product;