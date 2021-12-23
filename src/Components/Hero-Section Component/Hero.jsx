import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div>
          <h1 className="hero-header">
            Your Body <br /> Your Responsibility
          </h1>
          <h4 className="hero-text">
            We will help you achieve the body shape you <br /> desire in no
            time.
          </h4>
          <div className="hero-btns">
            <button className="hero-btn-one">Explore</button>
            <button className="hero-btn-two">
              <img src="../../explore.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <img src="../../threadmill.svg" alt="" className="hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
