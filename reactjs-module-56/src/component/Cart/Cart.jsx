import React from 'react';
import './Cart.css'
const Cart = ({cart,removeCart}) => {
    let message;
    if(cart.length===0){
        message='please add some product';
    }
    else{
        message='borolokkkkk'
    }
    return (
        <div>
            <h2>{cart.length}</h2>
            {cart.length<2 ? <span>gorib</span> : <span>aro kino</span>}
            <br />
            {message}
            {
                cart.map(tshirt=> <p key={tshirt._id}>{tshirt.name} <button onClick={()=>{removeCart(tshirt._id)}}>x</button></p>)
            }
            {cart.length===3 && <span>you ar awesome</span>}

            <h2 className={cart.length>=2 ? 'blue':'red'}>conditional css with ternary </h2>
            <h2 className={`bold ${cart.length>=3 ? 'red':'purple'}`}>conditional css with ternary inside template string </h2>
        </div>
    );
};

export default Cart;