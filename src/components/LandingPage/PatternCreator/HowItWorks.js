import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import icon1 from "../../../images/how-it-works/icon1.jpg"
import icon2 from "../../../images/how-it-works/icon2.jpg"
import icon3 from "../../../images/how-it-works/icon3.jpg"
import shapeImg from "../../../images/shape/shape5.png"

const HowItWorks = () => {
  return (
    <>
      <div id="howItWorks" className="how-it-works-area position-relative z-index1 pt-100 pb-75">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <span className="sub-title">How It Works</span>
            <h2>
              Here How It <span>Works</span>
            </h2>
            <p>
              You’re busy, so we’ll make this easy. Timo is constantly growing
              just like the possibilities of what you can achieve.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="how-it-works-item mb-25">
                <div className="icon">
                  <img src={icon1} alt="icon" />
                </div>
                <h4>
                  Step <span>- 01</span>
                </h4>
                <p>Pick a design from our collection of artwork</p>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="how-it-works-item mb-25">
                <div className="icon">
                  <img src={icon2} alt="icon" />
                </div>
                <h4>
                  Step <span>- 02</span>
                </h4>
                <p>Customize colors & choose settings for your design</p>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="how-it-works-item mb-25">
                <div className="icon">
                  <img src={icon3} alt="icon" />
                </div>
                <h4>
                  Step <span>- 03</span>
                </h4>
                <p>Download your customized design for free</p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img src={shapeImg} className="shape5" alt="shape5" />
        </div>
      </div>
    </>
  )
}

export default HowItWorks
