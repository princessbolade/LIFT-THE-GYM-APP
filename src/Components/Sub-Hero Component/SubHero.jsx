import React from "react";
import "./Subhero.css";

function SubHero() {
  return (
    <div className="subhero-section">
      <div className="test">
        <button className="testt">All</button>
        <button className="testt">Abdominals</button>
        <button className="testt">Arms</button>
        <button className="testt">Back</button>
        <button className="testt">Chest</button>
        <button className="testt">Legs</button>
        <button className="testt">Glutes</button>
        <button className="testt">Shoulders</button>
      </div>
      <div className="subhero-container">
        <div className="gym-sessions">
          <img src="../../dumbell.svg" alt="" />
          <h1>GYM SESSIONS</h1>
          <p>Register for any of our programs and start working out.</p>
        </div>
        <div className="gym-store">
          <img src="../../gymstore.svg" alt="" />
          <h1>GYM STORE</h1>
          <p>Get all your gym equipments and outfits from our store.</p>
        </div>
        <div className="gym-accessbility">
          <img src="../../accessibility.svg" alt="" />
          <h1>ACCESSIBILITY</h1>
          <p>At Fit Gym, we prioritize all our customers.</p>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
