import * as React from "react" 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import whyChooseUsImg1 from "../../../images/why-choose-us/why-choose-us4.png"
import whyChooseUsImg2 from "../../../images/why-choose-us/why-choose-us2.jpg"

const WhyChooseUs = () => {
  return (
    <>
      <div id="about" className="why-choose-us-area pb-100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div 
                className="why-choose-us-content two"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <span className="sub-title">Why Timo</span>
                <h2>
                  <span>Remove backgrounds</span> 100% automatically in 5
                  seconds with one click
                </h2>
                <p>
                  Thanks to timobg's clever AI, you can slash editing time - and
                  have more fun! No matter if you want to make a background
                  transparent (PNG) or add a white background to a photo - you
                  can do all this and more with timo.bg instantly.
                </p>

                <Row className="features-list">
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
                className="why-choose-us-image two"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhyChooseUs
