import React from 'react';
import { CheckIcon} from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex items-center '>
            <CheckIcon className="h-4 w-4 text-white" />
            <div >
            <p>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;