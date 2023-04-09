import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const SinglePrice = ({price}) => {
    return (
        <div className='bg-purple-800 p-5 flex flex-col'>
            <h2 className='text-5xl text-purple-300'>{price.pprice}</h2>
            <h2 className='text-3xl'>{price.name}</h2>
            <p >Features:</p>
            <div className='mb-4'>
            {
                price.features.map((feature,idx)=><Feature feature={feature} key={idx}></Feature>)
            }
            </div>
            <button className='w-full p-2 bg-green-400 mt-auto'>Buy now</button>
        </div>
    );
};

export default SinglePrice;