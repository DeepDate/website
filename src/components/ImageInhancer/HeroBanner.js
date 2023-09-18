import * as React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Typewriter } from "react-simple-typewriter";

import bannerImg1 from "../../images/banner/banner16.jpg";
import bannerImg2 from "../../images/banner/banner13-1.jpg";
import bannerImg3 from "../../images/banner/banner14.jpg";
import bannerImg4 from "../../images/banner/banner15.jpg";
import textImg from "../../images/banner/text.png";

import shapeImg1 from "../../images/shape/shape10.png";
import shapeImg2 from "../../images/shape/shape11.png";

const HeroBanner = () => {
  return (
    <>
      <div className="ii-banner-area position-relative z-index1">
        <Container fluid>
          <div className="ii-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <span>Dating powered by AI...</span>
              <br></br>{" "}
              <span className="typewrite">
                <Typewriter
                  words={[
                    "deep connection",
                    "no time wasted",
                    "no more swiping",
                    "fair to everyone",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              Let's unfold the future together...
            </p>
            <Link
              to="https://forms.gle/4RdkRbb5zJxArpRJ6"
              className="default-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
            Be the first to know! Click to join our early users.
            </Link> 
          </div>

          <div
            className="ii-banner-images"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={bannerImg1}
                  srcSet={bannerImg1}
                  alt="before"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={bannerImg2}
                  srcSet={bannerImg2}
                  alt="after"
                />
              }
            />

            <div className="images">
              <img src={bannerImg3} alt="banner" />
              <img src={bannerImg4} alt="banner" />
            </div>
          </div>
        </Container>

        {/* <div className="bannerTextSwiper">
          <img src={textImg} alt="text" />
        </div> */}

        {/* Shape Images */}
        <div className="shapes">
          <img src={shapeImg2} className="shape10" alt="shape10" />
          <img src={shapeImg2} className="shape11" alt="shape11" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
