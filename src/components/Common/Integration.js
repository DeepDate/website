import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import integrationImg1 from "../../images/integration/integration1.png"
import integrationImg2 from "../../images/integration/integration2.png"
import integrationImg3 from "../../images/integration/integration3.png"
import integrationImg4 from "../../images/integration/integration4.png"
import integrationImg5 from "../../images/integration/integration5.png"
import integrationImg6 from "../../images/integration/integration6.png"
import integrationImg7 from "../../images/integration/integration7.png"
import integrationImg8 from "../../images/integration/integration8.png"

const Integration = () => {
  return (
    <>
      <div id="integration" className="integration-area">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Integration</span>
            <h2>
              <span>Integration</span> that we’ve got
            </h2>
            <p>
              You’re busy, so we’ll make this easy. Timo is constantly growing
              just like the possibilities of what you can achieve.
            </p>
          </div>
        </Container>

        <Container fluid>
          <div className="integration-inner-box">
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg1} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg2} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg3} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg4} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg5} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg6} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg7} alt="Integration" />
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  sm={4}
                  className="col-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="800"
                  data-aos-once="false"
                >
                  <div className="item text-center">
                    <img src={integrationImg8} alt="Integration" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Integration
