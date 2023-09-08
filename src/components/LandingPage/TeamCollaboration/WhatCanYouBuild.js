import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import overviewImg1 from "../../../images/overview/overview6.gif"
import overviewImg2 from "../../../images/overview/overview4.gif"
import overviewImg3 from "../../../images/overview/overview5.gif"

import shapeImg1 from "../../../images/shape/shape5.png"

const WhatCanYouBuild = () => {
  return (
    <>
      <div id="about" className="overview-area pb-75">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <div 
                className="overview-section-title section-title position-relative z-index1"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="shapes">
                  <img
                    src={shapeImg1}
                    className="shape5"
                    alt="shape5"
                  />
                </div>
                <span className="sub-title">What Can You Build</span>
                <h2>
                  One <span>Personalized</span> image, <span>Infinite</span>{" "}
                  applications!
                </h2>
                <p>
                  With Personalized images, start creating powerful brand
                  experiences that drive more customer engagement and ROI in
                  minutes.
                </p>
              </div>

              <div 
                className="overview-big-box mb-25"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <Row className="align-items-center">
                  <Col lg={6} md={6} sm={6}>
                    <div className="image">
                      <img
                        src={overviewImg1}
                        alt="overview"
                      />
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={6}>
                    <div className="content">
                      <h3>Personalized E-mail images for you</h3>
                      <p>Take your e-mailing strategy to the next level!</p>
                      <h4>Build closer relationships</h4>
                      <p>
                        Engage with your audience through personalized email
                        marketing campaigns by delivering unique dynamic images.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <Row>
                <Col 
                  lg={12} md={6} sm={6}
                  data-aos="fade-in"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  <div className="overview-box mb-25">
                    <img
                      src={overviewImg2}
                      alt="overview"
                    />
                    <div className="content">
                      <h4>Drive more sells</h4>
                      <p>Unique coupon for each recipient</p>
                    </div>
                  </div>
                </Col>

                <Col 
                  lg={12} md={6} sm={6}
                  data-aos="fade-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  <div className="overview-box mb-25">
                    <img
                      src={overviewImg3}
                      alt="overview"
                    />
                    <div className="content">
                      <h4>Show your appreciation</h4>
                      <p>Send loyalty points & rewards to clients</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhatCanYouBuild
