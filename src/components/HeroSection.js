import React from "react";
import "../App.css";

// import { Button } from "./Button";
import "./HeroSection.css";
import "../fonts/KaushanScript-Regular.ttf";
// import Navbar from "../components/Navbar";
import Video from "../utils/videos/pranav.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      {/* <h1>Welcome</h1> */}
      <div className="hero-btns"></div>
      {/* <div class="arrow-container animated fadeInDown">
        <div class="arrow-2">
          <i class="fa fa-angle-down"></i>
        </div>
        <div class="arrow-1 animated hinge infinite zoomIn"></div>
      </div> */}
    </div>
  );
}

export default HeroSection;
