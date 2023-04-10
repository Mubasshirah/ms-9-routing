import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Single = ({single}) => {
    const navigate=useNavigate();
    const handleNavi=()=>{
        navigate(`/about/${single.id}`)
    }
    return (
        <div>
           <p> Single Person:{single.name}</p>
            <p>Email:{single.email}</p>
            <Link to={`/about/${single.id}`}><button>Show detail</button></Link>
            <button onClick={handleNavi}>Show more detail</button>
        </div>
    );
};

export default Single;