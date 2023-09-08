import * as React from "react" 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import userImg1 from "../../images/user/user1.jpg"
import userImg2 from "../../images/user/user2.jpg"
import userImg3 from "../../images/user/user3.jpg"
import userImg4 from "../../images/user/user4.jpg"

const TestimonialStyle1 = () => {
  return (
    <>
      <div id="testimonial" className="testimonials-area pb-75">
        <Container>
          <div className="testimonials-bg-shape">
            <Row>
              <Col lg={8} md={12}>
                <div
                  className="section-title"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  <span className="sub-title">Testimonials</span>
                  <h2>
                    <span>Our Customers love</span> us a lot - some shots of
                    what they say about us
                  </h2>
                </div>

                <Row 
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos-once="false"
                >
                  <Col lg={6} md={6}>
                    <div className="single-testimonials-box mb-25">
                      <div className="info d-flex align-items-center">
                        <img src={userImg1} alt="user" />
                        <div className="title">
                          <h5>Victor James</h5>
                          <span>Founder & CEO at Soapbox Project</span>
                        </div>
                      </div>
                      <p>
                        Timo has been designed with true human connection in
                        mind - it's helping me scale not just community
                        operations, but also thoughtful leadership, gratitude.
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} md={6}>
                    <div className="single-testimonials-box bg2 mb-25">
                      <div className="info d-flex align-items-center">
                        <img src={userImg2} alt="user" />
                        <div className="title">
                          <h5>Jonathon Ronan</h5>
                          <span>Founder & CEO at Theme Project</span>
                        </div>
                      </div>
                      <p>
                        Timo has been designed with true human connection in
                        mind - it's helping me scale not just community
                        operations, but also thoughtful leadership, gratitude,
                        and joy within the Theme Project community.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={4} md={12}>
                <Row 
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  data-aos-once="false"
                >
                  <Col lg={12} md={6}>
                    <div className="single-testimonials-box bg3 mb-25">
                      <div className="info d-flex align-items-center">
                        <img src={userImg3} alt="user" />
                        <div className="title">
                          <h5>Nivi Achanta</h5>
                          <span>Founder & CEO at Timo Project</span>
                        </div>
                      </div>
                      <p>
                        Timo has been designed with true human connection in
                        mind - it's helping me scale not just community
                        operations, but also thoughtful leadership, gratitude.
                      </p>
                    </div>
                  </Col>

                  <Col lg={12} md={6}>
                    <div className="single-testimonials-box bg4 mb-25">
                      <div className="info d-flex align-items-center">
                        <img src={userImg4} alt="user" />
                        <div className="title">
                          <h5>Walter White</h5>
                          <span>Founder & CEO at Angular Project</span>
                        </div>
                      </div>
                      <p>
                        Timo has been designed with true human connection in
                        mind - it's helping me scale not just community
                        operations, but also thoughtful leadership, gratitude.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default TestimonialStyle1
