import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import bannerImg1 from "../../../images/banner/banner20.png"
import userImg1 from "../../../images/user/user1.jpg"
import userImg2 from "../../../images/user/user2.jpg"
import userImg3 from "../../../images/user/user3.jpg"
import userImg4 from "../../../images/user/user4.jpg"
import userImg5 from "../../../images/user/user5.jpg"
import userImg6 from "../../../images/user/user6.jpg"

import shapeImg1 from "../../../images/shape/shape16.png"
import shapeImg2 from "../../../images/shape/shape17.png"

const HeroBanner = () => {
  return (
    <>
      <div id="home" className="tc-banner-area position-relative z-index1">
        <Container>
          <div className="tc-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <span>Collaborate</span> With Your Team In An{" "}
              <span>Effective</span> Way
            </h1>

            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
              Create 3D scenes, edit materials, and model 3D objects. Control
              the outcome of your design work. Become a 3d artist yourself and
              enhance your project.
            </p>

            <Link
              to="/pricing"
              className="default-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Try 15 days free trial <i className="flaticon-plus-1"></i>
            </Link>
          </div>

          <div
            className="tc-banner-image"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <img src={bannerImg1} alt="banner" />
          </div>
        </Container>

        <div className="users-list">
          <img
            src={userImg1}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
          />
          <img
            src={userImg2}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          />
          <img
            src={userImg3}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
          <img
            src={userImg4}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          />
          <img
            src={userImg5}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
          />
          <img
            src={userImg6}
            alt="user"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
          />
        </div>

        {/* Shape Images */}
        <div className="shapes">
          <img src={shapeImg1} className="shape16" alt="shape16" />
          <img src={shapeImg2} className="shape17" alt="shape17" />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
