import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import About from './component/About/About';
import Main from './component/Layout/Main';
import Grandpa from './component/GrandPa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
