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
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">About</span> */}
                  <h1 className="text-center mg:text-left fs-1">
                    {`#`}{""}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "LetsConverge", "LetsConverge", "LetsConverge" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p id="main-text text-center">
                    We are back with the third edition of ELEVATE'23 - the
                    annual event of IEEE IEM Student Branch. With the amount of
                    global response we got in the previous events, we can assure
                    you, that this time we have something new for you! So are
                    you ready to explore? Hold on to your seats as we bring on a
                    variety of workshops on areas like 3D Printing, AR Filter,
                    IoT, App Development, and motivating seminars and panels by
                    well-known dignitaries. Not a fan of learning all the time?
                    This time also we have in store for you interesting
                    competitions, games (and a fun surprise in the end)!
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <CountDown />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
