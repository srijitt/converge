import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import NavbarNew from "./NavbarNew"
import RegistratonDetails from "./RegistratonDetails";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import "../styles/home.css";
// import logo from '../images/logo.png'
import vdo from "../assets/videos/CONVERGE-TRAILER-FINAL-1.mp4";
import Contact from "./Contact";
import Colaborators from "./Colaborators";

const Home = () => {
  return (
    <>
    <NavbarNew/>
      <div className="container-fluid video-container text-center" id="home">
        <video
          src={vdo}
          alt="video"
          id="main-video"
          controls
          autoPlay
          muted
          loop
        >
          video
        </video>
      </div>
      <div className="App">
        <Banner />
        <div className="bg">
          <Projects />
          {/*<Skills />*/}
          {/*<RegistratonDetails />*/}
          <Colaborators />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
