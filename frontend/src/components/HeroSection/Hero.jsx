import React from "react";
import "./Hero.css";
import image13 from "../../assets/image13.png";

export default function Hero() {
  return (
    <div className="hero dark:text-white">
      <div className="hero-text dark:text-white">
        <h1 className="dark:text-white">Transforming Opportunities:</h1>
        <h1 className="dark:text-white">
          <span>Empower Builders</span> with <span>Hackathons</span>.
        </h1>
      </div>
      <div className="hero-img">
        <img src={image13} alt="" />
      </div>
    </div>
  );
}
