import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import icon1 from "../../images/contact/icon1.png"
import icon2 from "../../images/contact/icon2.png"
import icon3 from "../../images/contact/icon3.png"
import shape1 from "../../images/contact/shape1.png"
import shape2 from "../../images/contact/shape2.png"
import shape3 from "../../images/contact/shape3.png"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-75">
        <Container>
          <Row className="justify-content-center">
            <Col lg={4} md={6} sm={6}>
              <div className="single-contact-info-box mb-25 position-relative z-index1">
                <div className="icon">
                  <img src={icon1} alt="icon" />
                </div>
                <h4 className="mb-0">
                  <span>Phone:</span>{" "}
                  <a href="tel:+3237501234">+(323) 750-1234</a>
                </h4>
                <img src={shape1} className="shape" alt="shape" />
              </div>
            </Col>

            <Col lg={4} md={6} sm={6}>
              <div className="single-contact-info-box mb-25 position-relative z-index1">
                <div className="icon">
                  <img src={icon2} alt="icon" />
                </div>
                <h4 className="mb-0">
                  <span>Email:</span>{" "}
                  <a href="tel:+3237501234">hello@timo.com</a>
                </h4>
                <img src={shape2} className="shape" alt="shape" />
              </div>
            </Col>

            <Col lg={4} md={6} sm={6}>
              <div className="single-contact-info-box mb-25 position-relative z-index1">
                <div className="icon">
                  <img src={icon3} alt="icon" />
                </div>
                <h4 className="mb-0">
                  <span>Address:</span> +71 Vermont Ave, LA
                </h4>
                <img src={shape3} className="shape" alt="shape" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactInfo
