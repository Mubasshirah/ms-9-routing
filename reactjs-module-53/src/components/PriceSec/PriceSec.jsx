import React, { useEffect, useState } from 'react';
import SinglePrice from '../SinglePrice/SinglePrice';

const PriceSec = () => {
    const [prices,setPrice]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPrice(data))
    },[])
    return (
        <div>
            <h3>Awesome PriceSec</h3>

          <div className='grid grid-cols-3 gap-5 m-5'>
          {
prices.map(price=><SinglePrice price={price} key={price.id}></SinglePrice>)
            }
          </div>
        </div>
    );
};

export default PriceSec;