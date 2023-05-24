import React from "react";
import {  Routes, Route } from "react-router-dom";
import {Shoes} from "./pages/Shoes";
import { Cart } from "./pages/Cart";
import { SingleShoe } from "./pages/SingleShoe";
import { Navbar} from "./Navbar/Navbar";
import { Hero } from "./pages/Hero";
// import { Footer } from "./Footer";

export const App=()=>{

  return(
    <>
      <Navbar/>
      <Routes>
<Route path="/" element={<Hero/>} />
<Route path="/products" element={<Shoes/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/products/:id" element={<SingleShoe/>}/>
      </Routes>
      {/* <Footer/> */}
      </>
  )
}

// import './App.css';
// import { Navbar } from './Navbar/Navbar';
// import { Home } from './Home';
// import { About } from './About';
// import { Featured } from './Featured';
// import { Footer } from './Footer';
// function App() {
//   return (
//     <>
//      <Navbar/>
//      <Home/>
//      <About/>
//      <Featured/>
//      <Footer/>
//     </>
//   );
// }

// export default App;
