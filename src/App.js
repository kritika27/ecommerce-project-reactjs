import React,{lazy,Suspense} from "react";
import {  Routes, Route } from "react-router-dom";
import { Navbar} from "./Navbar/Navbar";
import { Hero } from "./pages/Hero";
import { Shoes } from "./pages/Shoes";
import { Cart } from "./pages/Cart";
import { SingleShoe } from "./pages/SingleShoe";
import Favorites from "./pages/Fav";

export const App=()=>{

  return(
    <>
      <Navbar/>
      <Routes>
<Route 
path="/" 
 element={
  <Suspense>
    <Hero />
  </Suspense>
}
 />
 <Route 
path="/products" 
 element={
  <Suspense>
    <Shoes />
  </Suspense>
}
 />
 <Route 
path="/cart" 
 element={
  <Suspense>
    <Cart />
  </Suspense>
}
 />
 <Route 
path="/products/:id" 
 element={
  <Suspense>
    <SingleShoe />
  </Suspense>
}
 />
 <Route 
path="/fav" 
 element={
  <Suspense>
    <Favorites />
  </Suspense>
}
 />
      </Routes>
    
      </>
  )
}