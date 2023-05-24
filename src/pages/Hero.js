import React from 'react'
import { Home } from '../Home';
import { About } from '../About';
import { Featured } from '../Featured';
import { Review } from '../Review';
import { Footer } from '../Footer';

export const Hero = () => {
  return (
    <>
      <Home/>
      <About/>
      <Featured/>
      <Review/>
      <Footer/>
    </>
  )
}
