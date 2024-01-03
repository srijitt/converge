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
                  <h2>Coming up</h2>
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
                        <Nav.Link eventKey="fourth" className="fs-8">28th Jan</Nav.Link>
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
                        <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              04:30 PM - 05:30 PM
                            </span>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              ELEVATE Inauguration
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              5:30 PM - 6:00 PM
                            </span>
                            <span style={{ paddingLeft: "20px" }}>
                              Orientation {"(Rules)"}
                            </span>
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:00 AM - 10:15 AM
                            </span>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Day briefing
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:15 AM - 11:15 AM
                            </span>
                            <span style={{ paddingLeft: "20px" }}>
                              Seminar - Sleeping on the roads to the Robot Man
                              of Bengal: A bootstrapped journey of an
                              entrepreneur ~ Arijit Hazra
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              11:30 AM - 1:30 PM
                            </span>
                            <span style={{ paddingLeft: "20px" }}>
                              Parallel Workshops - 3D Printing(Think again Lab)
                              & Embedded Systems(Alumnus Software)
                            </span>
                          </p>
                          {/* <ul>
                            -Women entrepreneurship in the wake of economic
                            liberalisation and globalisation.
                          </ul> */}
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              1:30 PM - 2:30 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Lunch break
                            </span>
                          </p>
                          {/* <ul>
                            -Geeks For Geeks <br />
                            Speaker : Dr. Mousiki Kar
                          </ul> */}
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              3:00 PM - 4:00 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Panel Discussion - The necessity of
                              Industry-Academia harmony
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              4:30 PM - 6:00 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Competition - PPT Presentation competition (WiE
                              Kolkata Section)
                            </span>
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <div style={{ top: "10%" }}>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:00 AM - 10:15 AM
                            </span>
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Day briefing
                            </span>
                          </p>

                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              10:15 AM - 12:15 AM
                            </span>
                            <span style={{ paddingLeft: "20px" }}>
                              Parallel Workshops - Internet of Things(Think
                              Again Lab) & Flutter Development(IEM Coding Club)
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              12:30 PM - 1:30 PM
                            </span>
                            <span style={{ paddingLeft: "20px" }}>
                              Competition - Project Presentation Competition
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              1:30 PM - 2:30 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Lunch break
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              2:30 PM - 3:30 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Seminar - AI Lens: Data driven Artificial
                              Inteligence ~ Shivam Avilash
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              3:30 PM - 5:00 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Competition - Ideathon
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span style={{ color: "white" }}>
                              5:00 PM - 6:00 PM
                            </span>
                            <span style={{ paddingLeft: "40px" }}>
                              Seminar - Building a personal brand through social
                              media ~ Indrajit Lahiri
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
