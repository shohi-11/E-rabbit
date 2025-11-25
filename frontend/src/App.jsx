import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import {Toaster} from 'sonner';


const App = () => {
  return (
   <BrowserRouter>
   <Toaster position ="top-right"/>
   {/*
   www.rabbit.com/home
   www.rabbit.com/products
   www.rabbit.com/cart
   */}
   <Routes>
    <Route path="/" element ={<UserLayout/>}>{/* User layout*/}
      <Route index element={<Home/>}/>
    </Route>
    <Route>{/*Admin Layout */}</Route>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App