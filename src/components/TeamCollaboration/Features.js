import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import icon1 from "../../images/features/icon5.png"
import icon2 from "../../images/features/icon6.png"
import icon3 from "../../images/features/icon7.png"
import icon4 from "../../images/features/icon8.png"
import shapeImg from "../../images/shape/shape.png"

const Features = () => {
  return (
    <>
      <div className="features-area position-relative pt-100 z-index1 pb-75">
        <Container>
          <div
            className="section-title text-start"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <span className="sub-title">Timo’s Features</span>
            <h2>
              <span>Transform</span> The Way Your Team <span>Works</span>
            </h2>
            <p>
              3D opens a new door for creativity. A solid set of features that
              will help you create your best designs.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="feature-item mb-25">
                <img src={icon1} alt="icon" />
                <h4>
                  <Link to="/services/service-details">Marketing</Link>
                </h4>
                <p>
                  Create high-performing campaigns with custom workflows, DAM
                  tools, and dynamic reports.
                </p>
                <Link to="/services/service-details" className="link-btn">
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="feature-item bg2 mb-25">
                <img src={icon2} alt="icon" />
                <h4>
                  <Link to="/services/service-details">
                    Professional Services
                  </Link>
                </h4>
                <p>
                  Create high-performing campaigns with custom workflows, DAM
                  tools, and dynamic reports.
                </p>
                <Link to="/services/service-details" className="link-btn">
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="feature-item bg3 mb-25">
                <img src={icon3} alt="icon" />
                <h4>
                  <Link to="/services/service-details">
                    Project Management
                  </Link>
                </h4>
                <p>
                  Create high-performing campaigns with custom workflows, DAM
                  tools, and dynamic reports.
                </p>
                <Link to="/services/service-details" className="link-btn">
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="feature-item bg4 mb-25">
                <img src={icon4} alt="icon" />
                <h4>
                  <Link to="/services/service-details">IT Services</Link>
                </h4>
                <p>
                  Create high-performing campaigns with custom workflows, DAM
                  tools, and dynamic reports.
                </p>
                <Link to="/services/service-details" className="link-btn">
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img src={shapeImg} className="shape1" alt="shape1" />
        </div>
      </div>
    </>
  )
}

export default Features
