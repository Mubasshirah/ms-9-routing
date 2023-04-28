import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
const PhoneHunter = () => {
    const [phones,setPhone]=useState([])
    useEffect(()=>{
       axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>
            {
                const datas=data.data.data;
                console.log(datas);
                const mapData=datas.map(data=>{
                    const splitSlug=data.slug;
                    
                    const sliced=splitSlug.split('-');
                    
                    const secondSplit=sliced[1];
                    
                    const splitInt=parseInt(secondSplit)
                    
                    const phoneInfo={
                        name:data.phone_name,
                        price:splitInt
                    }
                    return phoneInfo
                })
                console.log(mapData)
                 setPhone(mapData)
                console.log(phones)
                
            })
    },[])
    return (
        
      
<ResponsiveContainer width="100%" height={400}>

            <BarChart width={500} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
</ResponsiveContainer>
          
 
    );
};

export default PhoneHunter;