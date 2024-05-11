import React from "react";
import "./Organizations.css";
import image7 from "../../assets/image 7.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image11 from "../../assets/image 11.png";
import image12 from "../../assets/image 12.png";

export default function Organizations() {
  return (
    <div className="organizations dark:text-white">
      <p>Trusted by worlds leading organization</p>
      <div className="orgs dark:border-white dark:bg-neutral-200">
        <a href="">
          <img src={image7} alt="" />
        </a>
        <a href="">
          <img src={image8} alt="" />
        </a>
        <a href="">
          <img src={image9} alt="" />
        </a>
        <a href="">
          <img src={image10} alt="" />
        </a>
        <a href="">
          <img src={image11} alt="" />
        </a>
        <a href="">
          <img src={image12} alt="" />
        </a>
      </div>
    </div>
  );
}
