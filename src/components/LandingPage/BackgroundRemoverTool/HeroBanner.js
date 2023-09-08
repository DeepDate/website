import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"

import bannerImg7 from "../../../images/banner/banner7.jpg"
import bannerImg8 from "../../../images/banner/banner8.jpg"
import bannerImg9 from "../../../images/banner/banner9.jpg"
import bannerImg10 from "../../../images/banner/banner10.jpg"
import bannerImg11 from "../../../images/banner/banner11.jpg"
import bannerImg12 from "../../../images/banner/banner12.jpg"
import topImg from "../../../images/top.png"
import shapeImg9 from "../../../images/shape/shape9.png"
import TrustedBrands from "./TrustedBrands"

const HeroBanner = () => {
  return (
    <>
      <div id="home" className="brt-banner-area position-relative z-index1">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div
                className="brt-banner-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <h1>
                  <span>Remove</span> Image <span>Background</span> 100%
                  Authentically
                </h1>
                <p>
                  Create 3D scenes, edit materials, and model 3D objects.
                  Control the outcome of your design work. Become a 3d artist
                  yourself and enhance your project
                </p>

                <div className="upload-btn">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Upload Image <i className="flaticon-plus-1"></i>
                  </label>
                  <input id="file-upload" type="file" />
                </div>

                <div className="try-images d-flex align-items-center">
                  <p>
                    No Image? <span>Try one of this:</span>
                  </p>
                  <img src={bannerImg7} alt="upload" />
                  <img src={bannerImg8} alt="upload" />
                  <img src={bannerImg9} alt="upload" />
                  <img src={bannerImg10} alt="upload" />
                </div>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="brt-banner-image"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={bannerImg12}
                      srcSet={bannerImg12}
                      alt="Banner One"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={bannerImg11}
                      srcSet={bannerImg11}
                      alt="Banner two"
                    />
                  }
                />
                <img src={topImg} className="top" alt="top" />
              </div>
            </Col>
          </Row>

          {/* Trusted Brands */}
          <TrustedBrands />
        </Container>

        <div className="shapes">
          <img src={shapeImg9} className="shape9" alt="shape9" />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
