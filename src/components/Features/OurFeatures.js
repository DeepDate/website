import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import featureImg1 from "../../images/features/feature1.gif"

import shapeImg1 from "../../images/features/shape1.png"
import shapeImg2 from "../../images/features/shape2.png"

import icon1 from "../../images/features/icon1.png"
import icon2 from "../../images/features/icon2.png"
import icon3 from "../../images/features/icon3.png"
import icon4 from "../../images/features/icon4.png"

const OurFeatures = () => {
  return (
    <>
      <div id="features" className="features-area pb-75">
        <Container>
          <div className="features-inner-box position-relative z-index1 pt-100">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <span className="sub-title">Our Features</span>
              <h2>
                What is <span>Personalized</span> Image
              </h2>
              <p>
                Engage with your audience like never before. Timo is constantly
                growing just like the possibilities of what you can achieve.{" "}
              </p>
            </div>

            <div
              className="features-image text-center"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <img src={featureImg1} alt="feature" />
            </div>

            <div className="shapes">
              <img src={shapeImg1} alt="shape" />
              <img src={shapeImg2} alt="shape" />
            </div>
          </div>

          <Row className="justify-content-center" data-cues="fadeIn">
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon">
                  <img src={icon1} alt="icon" />
                </div>
                <h4>Personalize Any Layer</h4>
                <p>
                  Every layer of your Timo templates can be personalized with
                  subscribers data easily.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg2">
                  <img src={icon2} alt="icon" />
                </div>
                <h4>Friendly URL Builder</h4>
                <p>
                  Build your Personalized image URLS with a friendly interface
                  matching your layers with URL parameters.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg3">
                  <img src={icon3} alt="icon" />
                </div>
                <h4>Instant Updates</h4>
                <p>
                  Your personalized images are instantly updated whenever you
                  update your template layout.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg4">
                  <img src={icon4} alt="icon" />
                </div>
                <h4>Safe and Secured</h4>
                <p>
                  Our safety settings are here to make sure no one spams your
                  image generation credits.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg4">
                  <img src={icon4} alt="icon" />
                </div>
                <h4>Safe and Secured</h4>
                <p>
                  Our safety settings are here to make sure no one spams your
                  image generation credits.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg4">
                  <img src={icon4} alt="icon" />
                </div>
                <h4>Safe and Secured</h4>
                <p>
                  Our safety settings are here to make sure no one spams your
                  image generation credits.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg4">
                  <img src={icon4} alt="icon" />
                </div>
                <h4>Safe and Secured</h4>
                <p>
                  Our safety settings are here to make sure no one spams your
                  image generation credits.
                </p>
              </div>
            </Col>

            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="feature-box mb-25">
                <div className="icon bg4">
                  <img src={icon4} alt="icon" />
                </div>
                <h4>Safe and Secured</h4>
                <p>
                  Our safety settings are here to make sure no one spams your
                  image generation credits.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurFeatures
