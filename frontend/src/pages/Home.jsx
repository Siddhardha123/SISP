import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import HomeIllus from "../assets/sid-removebg-preview 1.svg";
const Home = () => {
  return (
    <div>
      <div className="upperDiv">
        <div className="upperDivLeft">
          <h1 className="text">Welcome!</h1>
          <div className="leftAnnouncement"></div>
        </div>
        <div className="upperDivRight">
          <img src={HomeIllus} alt="" id="illus" />
        </div>
      </div>
      <div className="LowerDiv">
        <div className="lowerAnnouncement"></div>
      </div>
    </div>
  );
};

export default Home;
