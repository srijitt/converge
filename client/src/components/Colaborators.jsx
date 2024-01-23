import React from "react";
// importing logos
import cslogo from "../assets/img/collaborators/ieeeiemCSLogo.jpg"
import ieeeLogo from "../assets/img/collaborators/IEEELogo.jpg"
import iemLogo from "../assets/img/collaborators/iemLogo.jfif"
import iiciem from "../assets/img/collaborators/iiciem.png"
import talyeah from "../assets/img/collaborators/TALYEAH.png"
import codingclub from "../assets/img/collaborators/Coding Club.png"
import wie from "../assets/img/collaborators/wielogo.jpg"

const Colaborators = () => {
  return (
    <section className="skill" id="guests">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn ">
              <h2>Collaborators</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <div className="collab row flex align-items-center justify-content-center gap-10 mt-3 ">
                <div className="col-md-2">
                  <img src={cslogo} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={ieeeLogo} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={iemLogo} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={talyeah} alt="" />
                </div>
              </div>
              <div className="collab row flex align-items-center justify-content-center mt-3 ">
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

export default Colaborators;
