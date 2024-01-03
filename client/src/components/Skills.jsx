import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import blueman from "../assets/img/blueman.jpg";
import youngwom from "../assets/img/youngwom.jpg";
import redwom from "../assets/img/redwom.jpg";
import youngman from "../assets/img/youngman.jpg";
import foodka from "../assets/img/guests/Indrajit Lahiri.jpeg";
import subodh from "../assets/img/guests/Subodh Gajare.jpeg";
import arijit from "../assets/img/guests/Arijit Hajra.jpeg";
import shivam from "../assets/img/guests/Shivam Abhilash.jpeg";
import dbd from "../assets/img/guests/Deeptendu Bikash Dhar 2023.jpg";
import skp from "../assets/img/guests/Susanta Kumar Parui.jpg";
import sc from "../assets/img/guests/Sandip Chakraborty.jpg";
import ap from "../assets/img/guests/Arpan Pal.jpg";
import td from "../assets/img/guests/Tathagata Das.jpg";
import debika from "../assets/img/guests/debikaBhattacharya.jpg";
import satyajit from "../assets/img/guests/Dr.Satyajit Chakrabarti.jpeg";
import alex from "../assets/img/guests/Dr. Satyajit Chakrabarti..jpg";
import thomas from "../assets/img/guests/Dr.Thomas Coughling.jpeg";
import md from "../assets/img/guests/Dr. Md. Rawidean Md.Kassim.jpeg";
import nita from "../assets/img/guests/Dr.Nita Patel.jpeg";
import nobanita from "../assets/img/guests/Dr.Nabanita Das.jpeg";

// import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="guests">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn flex flex-col items-center">
              <h2>Guests</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <h3 className="h3 text-left m-4">
                  <FontAwesomeIcon icon={faSquare} /> Inauguration
                </h3>
                <div className="mt-4 flex flex-col space-y-8 md:flex-row md:space-y-0">
                  <div className="item col-md-3">
                    <img src={satyajit} alt="guest" />
                    <h4 className="h5">Dr. Satyajit Chakrabarti</h4>
                    <h5>President, IEM UEM Group</h5>
                  </div>
                  <div className="item col-md-3">
                    <img src={alex} alt="guest" />
                    <h4 className="h5">Dr. Satyajit Chakrabarti</h4>
                    <h5>Director, IEM UEM Group</h5>
                  </div>
                  <div className="item col-md-3">
                    <img src={thomas} alt="guest" />
                    <h4 className="h5">Dr. Thomas Coughling</h4>
                    <h5>President Elect, IEEE</h5>
                  </div>
                  <div className="item col-md-3">
                    <img src={md} alt="guest" />
                    <h4 className="h5">Dr. Md. Rawidean Md. Kassim</h4>
                    <h5>
                      IEEE Senior Member <br /> Chair (2002-13) IEEE CS <br />
                      Malaysia Section
                    </h5>
                  </div>
                </div>
              </div>
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row flex justify-content-center space-y-8 md:space-y-0"
              >
                <div className="item col-md-3">
                  <img src={nita} alt="guest" />
                  <h4 className="h5">Dr. Nita Patel</h4>
                  <h5>President Elect, IEEE CS</h5>
                </div>
                <div className="item col-md-3">
                  <img src={nobanita} alt="guest" />
                  <h4 className="h5">Dr. Nabanita Das</h4>
                  <h5>ISI, Kolkata</h5>
                </div>
                <div className="item col-md-3">
                  <img src={debika} alt="guest" />
                  <h4 className="h5">Debika Bhattacharya</h4>
                  <h5>Dean of Academics & Controller of Examinations, IEM</h5>
                </div>
              </div>

              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <h3 className="h3 text-left m-4">
                  <FontAwesomeIcon icon={faSquare} /> Seminar
                </h3>
                <div className="mt-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
                <div className="item col-md-3">
                  <img src={foodka} alt="guest" />
                  <h4 className="h5">Indrajit Lahiri</h4>
                  <h5>aka Foodka</h5>
                </div>
                <div className="item col-md-3">
                  <img src={subodh} alt="guest" />
                  <h4 className="h5">Subodh Gajare</h4>
                  <h5>Principal Architect, Cisco R&D Blore</h5>
                </div>
                <div className="item col-md-3">
                  <img src={arijit} alt="guest" />
                  <h4 className="h5">Arijit Hajra</h4>
                  <h5>CEO, Think Again Lab</h5>
                </div>
                <div className="item col-md-3">
                  <img src={shivam} alt="guest" />
                  <h4 className="h5">Shivam Abhilash</h4>
                  <h5>Engineering Specialist, ZS Associates</h5>
                  <h5>Chair, Students & YP, IEEE CS MGAB</h5>
                </div>
                </div>
              </div>
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <h3 className="h3 text-left m-4">
                  <FontAwesomeIcon icon={faSquare} /> Panel Discussion
                </h3>
                <div className="mt-4 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5">
                <div className="item col-md-3">
                  <img src={skp} alt="guest" />
                  <h4 className="h5">Susanta Kumar Parui</h4>
                  <h5>Professor, Dept ECE, IIEST Shibpur</h5>
                </div>
                <div className="item col-md-3">
                  <img src={sc} alt="guest" />
                  <h4 className="h5">Sandip Chakraborty</h4>
                  <h5>Associate Professor, Dept CSE, IIT-KGP</h5>
                </div>

                <div className="item col-md-3">
                  <img src={debika} alt="guest" />
                  <h4 className="h5">Dr. Debika Bhattacharya</h4>
                  <h5>Dean of Academics & Controller of Examinations, IEM</h5>
                </div>
                <div className="item col-md-3">
                  <img src={ap} alt="guest" />
                  <h4 className="h5">Arpan Pal</h4>
                  <h5>
                    Distinguished Chief Scientist, Embedded Systems, TCS R&D
                  </h5>
                </div>
                </div>
              </div>
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row flex justify-content-center items-center mt-4 space-y-8 md:space-y-0 md:space-x-5"
              >

                <div className="item col-md-3">
                  <img src={dbd} alt="guest" />
                  <h4 className="h5">Deeptendu Bikash Dhar</h4>
                  <h5>
                    Distinguished Member of Technical Staff Alumnus Software
                  </h5>
                </div>
                <div className="item col-md-3">
                  <img src={td} alt="guest" />
                  <h4 className="h5">Tathagata Das</h4>
                  <h5>
                    Distinguished Member of Technical Staff Alumnus Software
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
