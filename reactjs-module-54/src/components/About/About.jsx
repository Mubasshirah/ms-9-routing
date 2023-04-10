import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from '../Single/Single';

const About = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            this is about:{data.length}
            <div>
                {data.map(single=><Single key={single.id} single={single}></Single>)}
            </div>
        </div>
    );
};

export default About;