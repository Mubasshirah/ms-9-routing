import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import { MoneyContext } from '../GrandPa/Grandpa';

const Father = () => {
    const [money,setMoney]=useContext(MoneyContext)
    const sendMoneytoMe=(money)=>{
        const newMoney=money-8000;
        setMoney(newMoney)
    }
    return (
        <div>
            <h3>father:{money}</h3>
<button onClick={()=>{sendMoneytoMe(money)}}>send money to me</button>
            <Myself></Myself>
        </div>
    );
};

export default Father;