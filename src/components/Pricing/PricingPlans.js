import * as React from "react" 
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import shapeImg1 from "../../images/shape/shape7.png"
import shapeImg2 from "../../images/shape/shape6.png"
import popularTag from "../../images/popular.png"

const PricingPlans = () => {
  return (
    <>
      <div id="pricing" className="pricing-area position-relative z-index1 pb-75">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} md={12}>
              <div
                className="pricing-section-title section-title"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100" 
                data-aos-once="false"
              >
                <span className="sub-title">Pricing Plans</span>
                <h2>
                  Our Affordable <span>Pricing Plans</span> For Your Project
                </h2>
                <p>
                  3D opens a new door for creativity. A solid set of features
                  that will help you create your top best designs with us.
                </p>
              </div>
            </Col>

            <Col lg={8} md={12}>
              <div className="pricing-lists">
                <Row className="align-items-center">
                  <Col 
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200" 
                    data-aos-once="false"
                  >
                    <div className="single-pricing-box mb-25">
                      <h4>Standard</h4>

                      <div className="price">
                        <sup>$</sup>
                        <span>25</span>
                        /month
                      </div>

                      <ul className="features-lists">
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          All Standard Features
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          10 Tutorial Per Month
                        </li>
                      </ul>

                      <Link to="#" className="default-btn">
                        Activate Package
                      </Link>

                      <div className="shapes">
                        <img
                          src={shapeImg1}
                          alt="shape7"
                          className="shape7"
                        />
                      </div>
                    </div>
                  </Col>

                  <Col 
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="300" 
                    data-aos-once="false"
                  >
                    <div className="single-pricing-box mb-25">
                      <h4>Premium</h4>

                      <div className="price">
                        <sup>$</sup>
                        <span>35</span>
                        /month
                      </div>

                      <ul className="features-lists">
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          All Premium Features
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          Unlimited Tutorial
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          Dual Account For Both
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          24/7 Support
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          Live className Facilities
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          Unlimited Cloud Space
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i>
                          And Many More
                        </li>
                      </ul>

                      <Link to="#" className="default-btn">
                        Activate Package
                      </Link>

                      <div className="shapes">
                        <img
                          src={shapeImg1}
                          alt="shape7"
                          className="shape7"
                        />
                        <img
                          src={popularTag}
                          className="popular"
                          alt="popular"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img
            src={shapeImg2}
            className="shape6"
            alt="shape6"
          />
        </div>
      </div>
    </>
  )
}

export default PricingPlans
