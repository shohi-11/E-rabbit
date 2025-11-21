import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
   <BrowserRouter>
   {/*
   www.rabbit.com/home
   www.rabbit.com/products
   www.rabbit.com/cart
   */}
   <Routes>
    <Route path="/" element ={<UserLayout/>}>{/* User layout*/}</Route>
    <Route>{/*Admin Layout*/}</Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App