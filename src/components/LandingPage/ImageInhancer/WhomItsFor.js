import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import icon1 from "../../images/overview/icon1.png"
import icon2 from "../../images/overview/icon2.png"
import icon3 from "../../images/overview/icon3.png"

import overviewImg1 from "../../images/overview/overview1.jpg"
import overviewImg2 from "../../images/overview/overview2.jpg"
import overviewImg3 from "../../images/overview/overview3.jpg"

const WhomItsFor = () => {
  return (
    <>
      <div className="overview-area bg-1f1a23 position-relative z-index1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div 
                className="overview-content text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                <span className="sub-title">Whom It's For</span>
                <h2>
                  <span>Automatically</span> enhance your images for{" "}
                  <span>Personal</span> and <span>Business</span> needs
                </h2>
                <p>
                  Thanks to timo.bg's clever AI, you can slash editing time -
                  and have more fun! No matter if you want to make a background
                  transparent (PNG) or add a white background to a photo - you
                  can do all this and more with timo.bg instantly.
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
        </Container>
      </div>
    </>
  )
}

export default WhomItsFor
