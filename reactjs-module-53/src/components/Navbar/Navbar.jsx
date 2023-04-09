import React, { useState } from 'react';
import Link from '../Link/Link';
import { XMarkIcon ,Bars3Icon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Blog Post', path: '/blog/:slug' }
      ];
      
    return (
        
        
        <nav>
            <div onClick={()=>setOpen(!open)} className='md:hidden bg-purple-400'>
                <span>{open===true ? 
                <XMarkIcon className="h-6 w-6 text-blue-500" />
                 
                :
                <Bars3Icon className="h-6 w-6 text-purple-500" />}</span>
            
            
            </div>
         <ul className={`md:flex absolute md:static bg-purple-400 p-5 ${open ? 'top-6' : '-top-56'}` }>
         {
            routes.map(route=><Link key={route.id} route={route}></Link>)
         }      
        </ul> 
        </nav>
     
    );
};

export default Navbar;