import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleDetail = () => {
    const data=useLoaderData();
    const navigate=useNavigate();
    const handNavi=()=>{
        navigate(-1)
    }
    console.log(data)
    return (
        <div>
            information about single person
            <p>name:{data.name}</p>
            <p>email hoilo:{data.email}</p>
            <button onClick={handNavi}>Go back</button>
        </div>
    );
};

export default SingleDetail;