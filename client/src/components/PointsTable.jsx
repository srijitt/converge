import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import logo from "../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IoIosSearch } from "react-icons/io";

const PointsTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(true);
  const [input, setInput] = useState("");

  

  useEffect(() => {
    getAllUser();
    // sortUserData();
  }, []);

  const serverURL = "https://converge-api.onrender.com";
  const localURL = "http://localhost:8080";
  const URL = serverURL;

  const compareName = (a, b) => {
    if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
    return 0;
  };


  const getAllUser = () => {
    fetch(`${URL}/getAllUsers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.sort(compareName))
      });
  };

  const fetchData = (value) => {
    fetch(`${URL}/getAllUsers`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.fullname &&
            user.fullname.toLowerCase().includes(value.toLowerCase())
          );
        });
        if(value === '')
         setData(data.sort(compareName));
        else
          setData(results.sort(compareName));
        
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  // var sorteddata = data?.sort() || "";
  return (
    <div className="points">
      <Navbar />

      <div className="mt-[70px] points-container">

        <div className="flex flex-col items-center justify-center">
        <h1 className="h1 text-center mb-14 font-bold">Points Table</h1>
        
        <div className=" bg-white w-fit md:w-[400px] lg:w-[600px] px-4 py-3 mb-14 flex justify-center items-center rounded-full shadow-sm shadow-yellow-300">
        <IoIosSearch className="text-yellow-500" size={30}/>
        <input type="text" className="px-4 bg-transparent py-1 w-full rounded-md border-none focus:outline-none text-red" placeholder="Search by name" value={input}
        onChange={(e) => handleChange(e.target.value)}/>
        </div>
        </div>
        

        <div className="flex my-8 flex-col justify-center items-center">
        {data?.map((i, index) => {
          return (
            <div key={index}>
              <div className="points-stats">
                <div className="username-col">
                  <p className="h3 short">
                    {i.fullname}
                  </p>
                  {/*<p>{i.username}</p>*/}
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
