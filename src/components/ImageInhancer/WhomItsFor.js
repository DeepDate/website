import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import icon1 from "../../images/overview/icon1.png";
import icon2 from "../../images/overview/icon2.png";
import icon3 from "../../images/overview/icon3.png";

import overviewImg1 from "../../images/overview/overview1.jpg";
import overviewImg2 from "../../images/overview/overview2.jpg";
import overviewImg3 from "../../images/overview/overview3.jpg";

import overviewImg4 from "../../images/overview/overview4.jpg";
import overviewImg5 from "../../images/overview/overview5.jpg";
import overviewImg6 from "../../images/overview/o9-new.jpg";

import overviewImg8 from "../../images/overview/o8-r.jpg";
import overviewImg9 from "../../images/overview/o9.jpg";
import overviewImg10 from "../../images/overview/o10.jpg";
import overviewImg11 from "../../images/overview/o11.jpg";

const WhomItsFor = () => {
  return (
    <>
      <div className="overview-area bg-1f1a23 position-relative z-index1">
        <Container>
          <div
            className="section-title text-white pb-75"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Seamless blend</span>
            <h2>
              Perfect synergy of you and&nbsp;<span>Your Avatar</span>
            </h2>
            {/* <p>
              You’re busy, so we’ll make this easy. Timo is constantly growing
              just like the possibilities of what you can achieve.
            </p> */}
          </div>

          <Row className="align-items-center pb-100">
            <Col lg={6} md={12}>
              <div
                className="overview-content text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                {/* <span className="sub-title">Whom It's For</span> */}
                <h2>
                  Let it be <span>Creative</span> and <span>Impress</span> your
                  counterpart.
                </h2>
                <p>
                  Choose the level of creativity, wit and humour, and see how
                  the conversation unfolds. It will not only be saving time, but
                  also entertaining to watch. Think of it as your friend
                  chatting on your behalf, with only exception that you can told
                  her off and she wouldn't get upset.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Spontaneous and witty
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    Protects your privacy
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Knows how to behave in the society
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="overview-image text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={overviewImg1} alt="overview" />
                <img src={overviewImg2} alt="overview" />
                <img src={overviewImg3} alt="overview" />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center pb-100">
            <Col lg={6} md={12}>
              <div
                className="overview-image text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={overviewImg4} alt="overview" />
                <img src={overviewImg8} alt="overview" />
                <img src={overviewImg9} alt="overview" />
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="overview-content text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                {/* <span className="sub-title">Whom It's For</span> */}
                <h2>
                  No limits to <span>Matches</span> and <span>Chats</span>
                </h2>
                <p>
                  Forget the bourdaries of existing dating apps. You get matched
                  to everyone around. Conversations start and go on as long as
                  you want. Without any pressure to reply or to meet...
                </p>
                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Discover people by chats
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    See who is better matching and why
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Make decision to take over at any time
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center pb-100">
            <Col lg={6} md={12}>
              <div
                className="overview-content text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                {/* <span className="sub-title">Whom It's For</span> */}
                <h2>
                  <span>Fair to you and others</span>
                </h2>
                <p>
                  We are the first app to equalize the matchmarket! Everyone
                  likes to be liked, but not everyone is equally attractive. We
                  will make those who like you give back to you for your
                  attention.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    No feeling of emptiness
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    No feeling of being used
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Easy to move on
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="overview-image text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={overviewImg6} alt="overview" />
                <img src={overviewImg10} alt="overview" />
                <img src={overviewImg11} alt="overview" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhomItsFor;
