import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TrustedBrands from "../EmailMarketingImage/TrustedBrands"

import bannerImg1 from "../../../images/banner/banner17.jpg"
import bannerImg2 from "../../../images/banner/banner18.gif"
import bannerImg3 from "../../../images/banner/banner19.jpg"

import shapeImg1 from "../../../images/shape/shape9.png"
import shapeImg2 from "../../../images/shape/shape14.png"

const HeroBanner = () => {
  return (
    <>
      <div id="home" className="emi-banner-area position-relative z-index1 overflow-hidden">
        <Container fluid>
          <Row className="align-items-center">
            <Col xl={5} lg={6} md={12}>
              <div className="emi-banner-content">
                <span 
                  className="sub-title"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  FOR GROWTH & ROI
                </span>

                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <span>Personalized</span> Image For <span>Email</span>{" "}
                  Marketing
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Send unique and personalized images to each of your recipient!
                  Works perfectly for email marketing campaigns, E-commerce
                  stores.
                </p>

                <div 
                  className="btn-box"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <Link to="/profile-authentication" className="default-btn">
                    Personalize My Images <i className="flaticon-plus-1"></i>
                  </Link>
                  <Link
                    to="/profile-authentication"
                    className="default-btn three"
                  >
                    Request Demo <i className="flaticon-plus-1"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col xl={7} lg={6} md={12}>
              <div className="emi-banner-image">
                <img
                  src={bannerImg1}
                  alt="banner"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                />
                <img
                  src={bannerImg2}
                  alt="banner" 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                />
                <img
                  src={bannerImg3}
                  alt="banner" 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                />
              </div>
            </Col>
          </Row>

          {/* TrustedBrands */}
          <TrustedBrands />
        </Container>

        {/* Shape Images */}
        <div className="shapes">
          <img
            src={shapeImg1}
            className="shape9"
            alt="shape9"
          />
          <img
            src={shapeImg2}
            className="shape14"
            alt="shape14"
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
