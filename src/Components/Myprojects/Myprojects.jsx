import React from "react";
import "./Myprojects.css";

import DashBordPage from "../images/DashboardPage.png";
import Ecommers from "../images/E-commers.png";
import MediaApp from "../images/MediaApp.png";
import DashBord from "../images/DashBoard.png";
import MusicApp from "../images/MusicApp.png";
import NurseryLive from "../images/NurseryLive.png";


const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="ProjectsTitle">Projects</h2>
      <span className="ProjectTitles">Projects</span>
      <span className="ProjectDesc">
        Designed and executed diverse projects, demonstrating strong
        problem-solving skills and a commitment to delivering high-quality
        results.
      </span>

      <div className="porjectsImgs">
        <img src={DashBordPage} alt="" width={500} height={250}   className="bgImg"   />
      
        <img src={Ecommers} alt="" width={400} height={250}       className="bgImg"   />
        <img src={DashBord} alt="" width={400} height={250}       className="bgImg"   />
        <img src={MediaApp} alt="" width={500} height={250}       className="bgImg"   />
        <img src={DashBordPage} alt="" width={300} height={200}  className="bgImg"    />
        <img src={NurseryLive} alt="" width={270} height={200}       className="bgImg"   />
        <img src={MusicApp} alt="" width={300} height={200}       className="bgImg"   />
      </div>





    </section>
  );
};

export default Projects;
