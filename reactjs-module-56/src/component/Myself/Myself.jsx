import React, { useContext } from 'react';
import Myboy from '../Myboy/Myboy';
import { MoneyContext } from '../GrandPa/Grandpa';

const Myself = () => {
    const [money,setMoney]=useContext(MoneyContext);
    const sendMOneyToPa=(money)=>{
        const newMOney=money+10000;
        setMoney(newMOney);
    }
    return (
        <div>
            <h4>Myself</h4>
            <p>grandpa's money:{money} tk</p>
            <button onClick={()=>sendMOneyToPa(money)}>Send money to pa</button>

            <Myboy></Myboy>
        </div>
    );
};

export default Myself;