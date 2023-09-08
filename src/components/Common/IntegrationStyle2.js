import * as React from "react" 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import circleImg from "../../images/shape/circle.png"
import gitlab from "../../images/integration/gitlab.png"
import gdrive from "../../images/integration/gdrive.png"
import firefox from "../../images/integration/firefox.png"
import figma from "../../images/integration/figma.png"
import slack from "../../images/integration/slack.png"
import sketch from "../../images/integration/sketch.png"
import discord from "../../images/integration/discord.png"
import dropbox from "../../images/integration/dropbox.png"
import raon from "../../images/integration/raon.png"

import shapeImg1 from "../../images/shape/shape12.png"
import shapeImg2 from "../../images/shape/shape13.png"

const IntegrationStyle2 = () => {
  return (
    <>
      <div id="integration" className="integration-area position-relative z-index1 pb-100 overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={12} className="order-2 order-lg-1">
              <div 
                className="integration-circle" 
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img
                  src={circleImg}
                  className="main-image"
                  alt="circle"
                />

                <div className="images">
                  <div>
                    <img
                      src={gitlab}
                      alt="gitlab"
                    />
                  </div>
                  <div>
                    <img
                      src={gdrive}
                      alt="gdrive"
                    />
                  </div>
                  <div>
                    <img
                      src={firefox}
                      alt="firefox"
                    />
                  </div>
                  <div>
                    <img
                      src={figma}
                      alt="figma"
                    />
                  </div>
                  <div>
                    <img
                      src={slack}
                      alt="slack"
                    />
                  </div>
                  <div>
                    <img
                      src={sketch}
                      alt="sketch"
                    />
                  </div>
                  <div>
                    <img
                      src={discord}
                      alt="discord"
                    />
                  </div>
                  <div>
                    <img
                      src={dropbox}
                      alt="dropbox"
                    />
                  </div>
                  <div>
                    <img src={raon} alt="Timo" />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="order-1 order-lg-2">
              <div
                className="integration-section-title section-title"
              >
                <span className="sub-title">Integration</span>
                <h2>
                  <span>Integration</span> that we’ve got
                </h2>
                <p>
                  You’re busy, so we’ll make this easy. Timo is constantly
                  growing just like the possibilities of what you can achieve.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Shape Images */}
        <div className="shapes">
          <img
            src={shapeImg1}
            className="shape12"
            alt="shape12"
          />
          <img
            src={shapeImg2}
            className="shape13"
            alt="shape13"
          />
        </div>
      </div>
    </>
  )
}

export default IntegrationStyle2
