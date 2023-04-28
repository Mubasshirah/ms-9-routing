import React, { createContext, useState } from 'react';
import Father from '../Father/Father';

export const RingContext=createContext('gold');
export const MoneyContext=createContext(0);
const Grandpa = () => {
    const [money,setMoney]=useState(0)
    return (
        <div>
            <h2>grandpa</h2>
            <p>grandpa's money:{money} tk</p>
           <MoneyContext.Provider value={[money,setMoney]}>
           <RingContext.Provider value='diamond ring'>
           <Father></Father>
           </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;