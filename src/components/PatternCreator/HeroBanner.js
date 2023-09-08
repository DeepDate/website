import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import bannerImg from "../../images/banner/banner21.png"

import shapeImg from "../../images/shape/shape18.png"
import shapeImg2 from "../../images/shape/shape19.png"

const HeroBanner = () => {
  return (
    <>
      <div className="pc-banner-area position-relative z-index1">
        <Container>
          <div className="pc-banner-content text-center ms-auto me-auto">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              Create Beautiful <span>Graphics Instantly</span> & Effortless!
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              Create unique graphics for social media posts, landing pages and
              branding in a few clicks. Then export them as images, or even code
              (SVG & CSS).
            </p>

            <Link
              to="/pricing"
              className="default-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              Try 15 days free trial <i className="flaticon-plus-1"></i>
            </Link>

            <ul
              className="list"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <li>
                <i className="flaticon-check-mark-1"></i> No design skills
                required
              </li>
              <li>
                <i className="flaticon-check-mark-1"></i> No credit card
                required
              </li>
              <li>
                <i className="flaticon-check-mark-1"></i> Free tier included
              </li>
            </ul>
          </div>
        </Container>

        <div className="pc-banner-image text-center ms-auto me-auto">
          <img src={bannerImg} alt="banner" />
        </div>

        {/* Shape Images */}
        <div className="shapes">
          <img src={shapeImg} className="shape18" alt="shape18" />
          <img src={shapeImg2} className="shape19" alt="shape19" />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
