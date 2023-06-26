import React from 'react'
import "./App.css";
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="box">
      <p style={{color:"#444",fontWeight:"400"}}>Latest Collection.</p>
        <h1 style={{ fontSize: "70px",marginTop:"20px",marginBottom:"30px",lineHeight:"4.5rem"}}>Feel Authentic Peace.</h1>
        <NavLink to="/products" title="Go to Shop page"><button className="btn">Shop Now</button></NavLink>
        </div>
      </div>
      <div className="pic"></div>
       </div>
  )
}
