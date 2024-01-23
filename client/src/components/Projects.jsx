import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import projImg from "../assets/img/tealcard.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../styles/projects.css";

const Projects = () => {
  // const projects = [
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  // ];

  return (
    <section className="project" id="schedule">
      <Container className="project-bx wow zoomIn">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Schedule</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 w-full justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="dates w-full">
                        <Nav.Link eventKey="first" className="fs-8">26th Jan</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="fs-8">27th Jan</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="fs-8">28th Jan</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                        <div className="tl-content" style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              06:30 PM - 07:30 PM
                            </span><br></br>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Inauguration
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              7:00 PM - 8:00 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                              Panel Discussion on "Navigating the Future of Technology in the World and in India"
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              8:00 PM - 8:30 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                              Innovation Cup Results Announcement
                            </span>
                          </p>

                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:00 AM - 11:00 AM
                            </span><br></br>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Seminar - Sustainable Innovation of the Future ~ Dr. Sudeshna Choudhury
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              11:30 AM - 02:00 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                              Parallel Workshop - 1. Meta Makers: Building the Future, Block by Block.<br></br>
                              2. - Circuit Chasers: The Line is Your Finish Line
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              02:00 PM - 03:00 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                              Competition - The Escape Rooms (Experience mind-boggling questions and win our version of escape room games)
                            </span>
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:00 AM - 11:00 AM
                            </span>
                            <br></br>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Almuni Talk ~ Bridge the gap between academia and professional success.
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              11:30 AM - 03:30 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                              The Grand Techno Carnival ~ Rack up points during the carnival, by playing games and participating in events
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              03:30 PM - 05:00 PM
                            </span><br></br>
                            <span style={{ paddingLeft: "20px" }}>
                            The Tech Treasure Trove Auction - Place your bids using the points you've accumulated throghout the events and win prizes.
                            </span>
                          </p>

                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="img"></img> */}
    </section>
  );
};

export default Projects;
