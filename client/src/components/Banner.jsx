import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountDown from "./CountDown";
import headerImg from "../assets/img/abc.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "LetsConverge",
    "LetsConverge",
    "LetsConverge",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="aligh-items-center flex justify-center">
          <Col xs={12} md={9} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">About</span> */}
                  <h1 className="text-center mg:text-lef">
                    {`#`}{""}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "LetsConverge", "LetsConverge", "LetsConverge" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p id="main-text text-center">
                  Did you feel a void in the tech universe? Brace yourselves! IEEE CS IEM Chapter proudly presents Converge 2024—a mesmerizing tech fiesta that's more than just an event; it's an experience! Immerse yourself in riveting talks by industry trailblazers, unlocking the mysteries of cutting-edge subjects. Craft your skills in application-based workshops, turning concepts into tangible tech marvels. Engage in captivating workshops, unravelling the depths of the latest technologies. Face off in thrilling competitions where only the tech-savvy survive. Prizes await the champions! Rack up points during the carnival—these points unveil a surprise that'll leave you on the edge of your seat! So, get ready to witness the most awaited tech fest of the year, and let's converge!

                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <CountDown />
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
                </Col> */}
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
