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
            <span className="sub-title">How It Works</span>
            <h2>
              Why Choose <span>Us</span>?
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
                  Advance <span>Analytics</span> and{" "}
                  <span>Machine Learning</span> capabilities.
                </h2>
                <p>
                  AML Cloud's product leverages advanced analytics and machine
                  learning algorithms to detect and prevent suspicious activity
                  more efficiently and accurately.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Creative Professionals
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    Ecommerce
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Real Estate
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
                <img src={overviewImg1} alt="overview" />
                <img src={overviewImg2} alt="overview" />
                <img src={overviewImg3} alt="overview" />
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
                  <span>Customiizeability</span> and <span>User-Friendly</span>
                </h2>
                <p>
                  The platform's capacity to get tailored as well its match to
                  the user’s intuite and ease to use, makes it accessible to all
                  team members regardless of technical expertise.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Creative Professionals
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    Ecommerce
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Real Estate
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
                  <span>Comprehensive Features</span>
                </h2>
                <p>
                  The platform’s ability to cover all aspects of anti-money
                  laundering, ensuring that organizations in the financial
                  industry are fully equipped to comply with regulations and
                  mitigate risk.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Creative Professionals
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    Ecommerce
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Real Estate
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
                <img src={overviewImg1} alt="overview" />
                <img src={overviewImg2} alt="overview" />
                <img src={overviewImg3} alt="overview" />
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
                  <span>Automation</span>
                </h2>
                <p>
                  Our product offers a high degree of automation, streamlining
                  compliance processes and improving overall efficiency.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img src={icon1} alt="icon" />
                    </div>
                    Creative Professionals
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon2} alt="icon" />
                    </div>
                    Ecommerce
                  </li>
                  <li>
                    <div className="icon">
                      <img src={icon3} alt="icon" />
                    </div>
                    Real Estate
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhomItsFor;
