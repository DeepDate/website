import * as React from "react" 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import whyChooseUsImg1 from "../../images/why-choose-us/why-choose-us1.jpg"
import whyChooseUsImg2 from "../../images/why-choose-us/why-choose-us2.jpg"
import whyChooseUsImg3 from "../../images/why-choose-us/why-choose-us3.png"

const AboutUsContent = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div 
                className="why-choose-us-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="false"
              >
                <span className="sub-title">About Timo</span>
                <h2>
                  <span>Purpose</span> - built solutions for every product need
                </h2>
                <p>
                  3D opens a new door for creativity. A solid set of features
                  that will help you create your best designs.
                </p>

                <Row className="features-list">
                  <Col lg={6} md={6} sm={6}>
                    <div className="mt-25">
                      <h4>Easy Automation</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity.
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={6}>
                    <div className="mt-25">
                      <h4>Easy To Use</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity.
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={6}>
                    <div className="mt-25">
                      <h4>Team Collaboration</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity.
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={6}>
                    <div className="mt-25">
                      <h4>Browser Based</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div 
                className="why-choose-us-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="false"
              >
                <img
                  src={whyChooseUsImg1}
                  alt="Why choose us"
                />
                <img
                  src={whyChooseUsImg2}
                  alt="Why choose us"
                />
                <img
                  src={whyChooseUsImg3}
                  alt="Why choose us"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AboutUsContent
