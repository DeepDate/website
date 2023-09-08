import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import whyChooseUsImg1 from "../../../images/why-choose-us/why-choose-us5.jpg"
import whyChooseUsImg2 from "../../../images/why-choose-us/why-choose-us6.jpg"
import whyChooseUsImg3 from "../../../images/why-choose-us/why-choose-us7.jpg"
import icon1 from "../../../images/why-choose-us/icon5.png"
import icon2 from "../../../images/why-choose-us/icon6.png"

const WhyChooseUs = () => {
  return (
    <>
      <div id="features" className="why-choose-us-area position-relative z-index2 pt-100 bg-252029">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div 
                className="why-choose-us-img text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
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
            
            <Col lg={6} md={12}>
              <div 
                className="why-choose-us-text text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <span className="sub-title">Why Timo</span>
                <h2>
                  <span>Upscale</span> pictures without losing quality{" "}
                  <span>up to 16x</span>
                </h2>
                <p>
                  Thanks to timobg's clever AI, you can slash editing time - and
                  have more fun! No matter if you want to make a background
                  transparent (PNG) or add a white background to a photo - you
                  can do all this and more with timo.bg instantly.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <img
                        src={icon1}
                        alt="icon"
                      />
                    </div>
                    <h4>Team Collaboration</h4>
                    <p>
                      Work with your team in real-time and set individual
                      permissions. 3D opens a new door for creativity.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src={icon2}
                        alt="icon"
                      />
                    </div>
                    <h4>Browser Based</h4>
                    <p>
                      Work with your team in real-time and set individual
                      permissions. 3D opens a new door for creativity.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhyChooseUs
