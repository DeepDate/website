import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import whyChooseUsImg1 from "../../images/why-choose-us/why-choose-us4.png"
import whyChooseUsImg2 from "../../images/why-choose-us/why-choose-us2.jpg"
import whyChooseUsImg3 from "../../images/why-choose-us/why-choose-us3.png"
import userImg1 from "../../images/user/user7.jpg"

const ContactForm = () => {
  return (
    <>
      <div className="contact-area pb-100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="contact-content">
                <span className="sub-title">Contact Us</span>
                <h2>
                  Feel Free To <span>Get In Touch</span> With Us
                </h2>
                <form>
                  <Row>
                    <Col lg={12} md={6}>
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="bi bi-person"></i>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </Col>

                    <Col lg={12} md={6}>
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="bi bi-envelope"></i>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </Col>

                    <Col lg={12} md={12}>
                      <div className="form-group">
                        <label htmlFor="phone">
                          <i className="bi bi-telephone"></i>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone no"
                        />
                      </div>
                    </Col>

                    <Col lg={12} md={12}>
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="bi bi-pencil"></i>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Your message here"
                          cols="30"
                          rows="7"
                        ></textarea>
                      </div>
                    </Col>

                    <Col lg={12} md={12}>
                      <button type="submit" className="default-btn three">
                        Send Your Message Now{" "}
                        <i className="flaticon-plus-1"></i>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="contact-image">
                <img src={whyChooseUsImg1} alt="why-choose-us" />
                <img src={whyChooseUsImg2} alt="why-choose-us" />
                <img src={whyChooseUsImg3} alt="why-choose-us" />
                <img src={userImg1} alt="user" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactForm
