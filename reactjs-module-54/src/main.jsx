import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import First from './components/First/First';
import SingleDetail from './components/SingleDetail/SingleDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<First></First>
      },
      {
        path:"/about",
        element:<About></About>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"/about/:singleid",
        element:<SingleDetail></SingleDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.singleid}`)
      },
      {
        path:"*",
        element:<div>404 not found</div>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)


// component->route->link
