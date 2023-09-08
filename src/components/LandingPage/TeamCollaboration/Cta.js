import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"

const Cta = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="cta-area">
        <Container>
          <div className="cta-inner-box position-relative z-index1">
            <Row className="align-items-center">
              <Col
                lg={9}
                md={12}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                <h2>
                  <span>Book</span> a complimentary community{" "}
                  <span>consultation</span>
                </h2>
              </Col>

              <Col
                lg={3}
                md={12}
                className="text-lg-end"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <button
                  type="button"
                  className="default-btn three"
                  onClick={handleShow}
                >
                  Schedule Now <i className="flaticon-plus-1"></i>
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Contact Us Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contactModal"
      >
        <Modal.Header closeButton></Modal.Header>

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
                    rows="5"
                  ></textarea>
                </div>
              </Col>

              <Col lg={12} md={12}>
                <button type="submit" className="default-btn three">
                  Send Your Message Now <i className="flaticon-plus-1"></i>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Cta
