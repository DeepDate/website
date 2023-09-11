import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import icon1 from "../../images/why-choose-us/icon1.png";
import icon2 from "../../images/why-choose-us/icon2.png";
import icon3 from "../../images/why-choose-us/icon3.png";
import icon4 from "../../images/why-choose-us/icon4.png";

const WhyChooseUsTwo = () => {
  return (
    <>
      <div className="why-choose-us-area pt-100 pb-75 bg-1f1a23">
        <Container>
          <div
            className="section-title text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Why Choose Us</span>
            <h2>
              Why <span>Timo</span> is the <span>Best</span>
            </h2>
          </div>

          <Row className="justify-content-center">
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="single-why-choose-us-box mb-25 text-white">
                <img src={icon1} alt="icon" />
                <h4 className="mb-0">Upscale pics with AI</h4>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="single-why-choose-us-box mb-25 text-white">
                <img src={icon2} alt="icon" />
                <h4 className="mb-0">Fix pixelation and blur</h4>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="single-why-choose-us-box mb-25 text-white">
                <img src={icon3} alt="icon" />
                <h4 className="mb-0">Correct color and lighting</h4>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <div className="single-why-choose-us-box mb-25 text-white">
                <img src={icon4} alt="icon" />
                <h4 className="mb-0">Remove JPEG artifacts</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUsTwo;
