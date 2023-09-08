import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubscribeForm = () => {
  return (
    <>
      <div className="subscribe-area">
        <Container>
          <div
            className="subscribe-inner-box ptb-100 position-relative z-index1"
          >
            <Row className="align-items-center">
              <Col lg={6} md={12}>
                <div 
                  className="content"
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  <h2>
                    <span>Get</span> Updates All The Time
                  </h2>
                  <p>
                    Sign up for our mailing list and we will let you know when
                    we release new features or updates.
                  </p>
                </div>
              </Col>

              <Col 
                lg={6} md={12}
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <form>
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email here"
                  />
                  <button type="submit" className="default-btn three">
                    Subscribe Now <i className="flaticon-plus-1"></i>
                  </button>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SubscribeForm
