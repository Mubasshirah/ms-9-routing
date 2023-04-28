import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandPa/Grandpa';

const Myboy = () => {
    const ring=useContext(RingContext);
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h5>Myboy {ring}</h5>
            <p>Got money from my pa</p>
        </div>
    );
};

export default Myboy;