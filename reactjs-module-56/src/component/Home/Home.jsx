import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import SingleTshirt from '../singleTshirt/SingleTshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts=useLoaderData();
    const [cart,setCart]=useState([]);
    const handleAddToCart=(tshirt)=>{
        const exist=cart.find(ts=>ts._id===tshirt._id);
        if(exist){
            toast('you have already added it')
        }
        else{

            const newCart=[...cart,tshirt];
            setCart(newCart);
        }
    }
    const removeCart=(id)=>{
        const remaining=cart.filter(ts=>ts._id !==id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container' >
           {
            tshirts.map(tshirt=><SingleTshirt handleAddToCart={handleAddToCart} tshirt={tshirt} key={tshirt._id}></SingleTshirt>)
           }
        </div>
        <div className='cart-container'>
            <Cart cart={cart} removeCart={removeCart}></Cart>
        </div>
        </div>
    );
};

export default Home;