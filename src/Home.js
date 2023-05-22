import React from 'react'
import "./App.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="box">
      <p style={{color:"#444",fontWeight:"400"}}>Latest Collection.</p>
        <h1 style={{ fontSize: "70px",marginTop:"0px",lineHeight:"4.5rem"}}>Feel Authentic Peace.</h1>
        <button>Shop Now</button>
        </div>
      </div>
      <div className="pic"></div>
      {/* <img className="dress" src="./vino-tri-mulia-bZDTVuDH38M-unsplash.jpg" alt="lady in black"/> */}
      </div>
  )
}
