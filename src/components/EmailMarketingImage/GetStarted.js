import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import credits from "../../images/credits.png"

const GetStarted = () => {
  return (
    <>
      <div className="get-started-area position-relative z-index2">
        <Container>
          <div className="get-started-inner">
            <Row className="align-items-center">
              <Col lg={6} md={12}>
                <div className="content">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                  >
                    Turn <span>Credits</span> into a nice custom{" "}
                    <span>Templates</span>
                  </h2>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                  >
                    With Timo Studio, you can order custom templates, designed
                    by our team, using your credits. A great alternative to
                    design agencies.
                  </p>

                  <Link
                    to="/profile-authentication"
                    className="default-btn three"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Get Started Now <i className="flaticon-plus-1"></i>
                  </Link>
                </div>
              </Col>

              <Col lg={6} md={12}>
                <div className="image text-center">
                  <img src={credits} alt="credits" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default GetStarted
