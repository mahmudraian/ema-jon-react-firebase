
import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Main from './Components/Layout/Main';
import Shop from '../src/Components/Shop/Shop';
import Order from './Components/Orders/Order';
import Inventoty from './Components/Inventory/Inventoty';
import { Productsandcart } from './lodars/Productsandcart';

import Login from './Components/LogIN/Login';
import Signup from './Components/Sign up/Signup.js';
import Shipping from './Components/Shipping/Shipping';
import Privateroutes from './routes/Privateroutes';


const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,children:[{
      
        path: '/',element:<Shop></Shop>,
        loader:()=> fetch('products.json')
  },{
    path: '/shop',element:<Shop></Shop>,
    loader:()=> fetch('products.json')

  },
  {
    path:'/about',element:<About></About>
  },
  {
    path:'/shipping',element:<Privateroutes><Shipping></Shipping></Privateroutes>
  },
  {
    path:'/order',
    loader:Productsandcart,
    element:<Order></Order>
  },
  {
    path:'/inventory',element:<Inventoty></Inventoty>
  },
  {
    path:'/signup',element:<Signup></Signup>
  },
{
  path: "/login",element:<Login></Login>
}


]
  },
  
])

function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
