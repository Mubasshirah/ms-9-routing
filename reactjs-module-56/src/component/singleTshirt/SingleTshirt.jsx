import React from 'react';
import './SingleTshirt.css'
const SingleTshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='singleTshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default SingleTshirt;