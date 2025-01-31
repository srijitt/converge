import { Container, Row, Col } from "react-bootstrap";
import Contact from "./Contact";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Contact className="mt-5" />
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
  )
}
