import * as React from "react" 
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';

import bannerImg4 from "../../../images/banner/banner4.png"
import bannerImg5 from "../../../images/banner/banner5.png"
import bannerImg6 from "../../../images/banner/banner6.png"

import bannerImg1 from "../../../images/banner/banner1.png"
import bannerImg2 from "../../../images/banner/banner2.png"
import bannerImg3 from "../../../images/banner/banner3.gif"

import shapeImg1 from "../../../images/shape/shape1.png"
import shapeImg2 from "../../../images/shape/shape2.png"

const HeroBanner = () => {
  return (
    <>
      <div id="home" className="aidt-banner-area">
        <Container>
          <div className="aidt-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100" 
              data-aos-once="false"
            >
              The Best {' '}
              <span>AI</span> {' '}
              <img src={bannerImg4} alt="Banner 4" /> {' '}
              Integrated <br /> 3D {' '}
              <img src={bannerImg5} alt="Banner 5" /> {' '}
              <span>DESIGN</span> {' '}
              Tools for your next {' '}
              <span>PROJECT</span> {' '}
              <img src={bannerImg6} alt="Banner 6" />
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="false"
            >
              Create 3D scenes, edit materials, and model 3D objects. Control
              the outcome of your design work. Become a 3d artist yourself and
              enhance your project.
            </p>

            <Link 
              to="/profile-authentication" 
              className="default-btn"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300" 
              data-aos-once="false"
            >
              Try 15 days free trial <i className="flaticon-plus-1"></i>
            </Link>
          </div>

          <div className="aidt-banner-images">
            <img
              src={bannerImg1}
              alt="Banner 1"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100" 
              data-aos-once="false"
            />
            <img
              src={bannerImg2}
              alt="Banner 2" 
            />
            <img
              src={bannerImg3}
              alt="Banner 3"
            />
          </div>
        </Container>

        {/* Shapes Images */}
        <div className="shapes">
          <img
            src={shapeImg1}
            alt="shape1"
            className="shape1"
          />
          <img
            src={shapeImg2}
            alt="shape2"
            className="shape2"
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
