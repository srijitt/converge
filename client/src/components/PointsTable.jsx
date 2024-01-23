import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import logo from "../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const PointsTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(true);
  useEffect(() => {
    getAllUser();
    // sortUserData();
  }, []);

  const serverURL = "https://elevate2k23.onrender.com";
  const localURL = "http://localhost:8080";
  const URL = localURL;

  const getAllUser = () => {
    fetch(`${URL}/getAllUsers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data)
      });
  };

  // var sorteddata = data?.sort() || "";
  return (
    <div className="points">
      <Navbar />

      <div className="mt-[70px] points-container">
        <h1 className="h1 text-center mb-14 font-bold">Points Table</h1>
        

        <div className="flex my-8 flex-col justify-center items-center">
        {data?.map((i, index) => {
          return (
            <div key={index}>
              <div className="points-stats">
                <div className="username-col">
                  <p className="h3 short">
                    - {i.username}
                  </p>
                  <p>{i.fullname}</p>
                </div>
                <div className="tid-col">
                  <p className="h3 short">{i.tid}</p>
                  <p>{i.email}</p>
                  <p>{i.mobile}</p>
                </div>
                <div>
                  <p className="h1 short">
                    <span className="mobile">Points: </span>
                    {i.points ? i.points : "0"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      <footer className="footer">
      <Container >
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          
          <Col className="mt-5 logo-container" size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div> */}
            <p className="copyright">Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default PointsTable;
