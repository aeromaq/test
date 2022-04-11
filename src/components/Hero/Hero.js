import React from 'react'
import './Hero.css'
import CircleOne from'../../assets/circle-one.svg'
import CircleTwo from'../../assets/circle-two.svg'
import Cube from '../../assets/cube.svg'
function Hero() {
  return (
    <div>
      <div className="home-container">
          <div className="center">
            <div className="cube">
              <img src={Cube} alt="" />
            </div>
            <div className="brand-logo">
              <p className="brand-name">AMQ</p>
              <p className="brand-description">Developing Software and Design</p>
            </div>
          </div>
          <div className="circle-one">
            <img src={CircleOne} alt="" />
          </div>
          <div className="circle-two">
            <img src={CircleTwo} alt="" />
          </div>
      </div>
      
      
    </div>
    
  )
}

export default Hero;

